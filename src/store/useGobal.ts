import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import { toBase64 } from '@/utils/crypto'
import storage from '@/utils/storage'

const DEFAULT_STATE = {
  bears: 0 as number,
  a: 1 as number,
  hydrated: false as boolean, // 用于标记是否完成rehydrate
} as const

// 自动推断类型
type State = typeof DEFAULT_STATE

type BearStore = State & {
  setState: (value: Partial<State> | ((prev: State) => Partial<State>)) => void
}

const useBearStore = create<BearStore>()(
  devtools(persist(
    (set) => ({
      ...DEFAULT_STATE,
      setState: (value) =>
        set((prev) => ({ ...prev, ...(typeof value === 'function' ? value(prev) : value) })),
      reset: () => set(DEFAULT_STATE)
    }),
    {
      name: toBase64('food-storage'),
      storage,

      onRehydrateStorage: () => (state) => {
        useBearStore.getState().setState({ hydrated: true })
      },
    },
  ))
  ,
)

export default useBearStore
