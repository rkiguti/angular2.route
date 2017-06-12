"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const messages_component_1 = require("./messages.component");
const auth_guard_service_1 = require("../shared/auth-guard.service");
const prevent_unsaved_changes_guard_service_1 = require("../shared/prevent-unsaved-changes-guard.service");
exports.messagesRouting = router_1.RouterModule.forChild([
    {
        path: 'messages',
        component: messages_component_1.MessagesComponent,
        canActivate: [auth_guard_service_1.AuthGuard],
        canDeactivate: [prevent_unsaved_changes_guard_service_1.PreventUnsavedChangesGuard]
    }
]);
//# sourceMappingURL=messages.routing.js.map