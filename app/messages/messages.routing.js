"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const messages_component_1 = require("./messages.component");
const auth_guard_service_1 = require("../auth-guard.service");
exports.messagesRouting = router_1.RouterModule.forChild([
    {
        path: 'messages',
        component: messages_component_1.MessagesComponent,
        canActivate: [auth_guard_service_1.AuthGuard]
    }
]);
//# sourceMappingURL=messages.routing.js.map