type UsersMessages = typeof import("./messages/en/users.json");
type Messages = UsersMessages
declare interface IntlMessages extends Messages { }