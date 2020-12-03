/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory } from "@stencil/router";
import { Product } from "./models.ts/product.model";
import { Order } from "./models.ts/order.model";
export namespace Components {
    interface AdminOrder {
        "id": string;
    }
    interface AdminPanel {
    }
    interface AdminView {
    }
    interface AlertRegister {
        "id": string;
    }
    interface AppHome {
    }
    interface AppProfile {
        "match": MatchResults;
    }
    interface AppRoot {
    }
    interface ClientDeserts {
        "getDesserts": () => Promise<void>;
    }
    interface ClientPanel {
    }
    interface ClientView {
    }
    interface FinalizePurchase {
        "id": string;
    }
    interface MyBody {
    }
    interface MyFooter {
    }
    interface MyHeader {
    }
    interface OfferCarousel {
    }
    interface OptionsDrinks {
    }
    interface PlateFood {
    }
    interface RigthPanel {
    }
    interface SalesTable {
    }
    interface SandwichesFood {
    }
    interface TableOrders {
        "getOrders": () => Promise<void>;
        "handleOrder": (e: any) => Promise<void>;
    }
    interface TodaysMenu {
    }
    interface UserInfo {
        "butonsChoice": string;
        "history": RouterHistory;
        "profileChoice": string;
    }
    interface UserLogin {
        "handleLogin": (e: any) => Promise<void>;
        "history": RouterHistory;
        "validateUser": () => Promise<void>;
    }
    interface UserRegister {
        "hidden": boolean;
        "id": string;
    }
}
declare global {
    interface HTMLAdminOrderElement extends Components.AdminOrder, HTMLStencilElement {
    }
    var HTMLAdminOrderElement: {
        prototype: HTMLAdminOrderElement;
        new (): HTMLAdminOrderElement;
    };
    interface HTMLAdminPanelElement extends Components.AdminPanel, HTMLStencilElement {
    }
    var HTMLAdminPanelElement: {
        prototype: HTMLAdminPanelElement;
        new (): HTMLAdminPanelElement;
    };
    interface HTMLAdminViewElement extends Components.AdminView, HTMLStencilElement {
    }
    var HTMLAdminViewElement: {
        prototype: HTMLAdminViewElement;
        new (): HTMLAdminViewElement;
    };
    interface HTMLAlertRegisterElement extends Components.AlertRegister, HTMLStencilElement {
    }
    var HTMLAlertRegisterElement: {
        prototype: HTMLAlertRegisterElement;
        new (): HTMLAlertRegisterElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLClientDesertsElement extends Components.ClientDeserts, HTMLStencilElement {
    }
    var HTMLClientDesertsElement: {
        prototype: HTMLClientDesertsElement;
        new (): HTMLClientDesertsElement;
    };
    interface HTMLClientPanelElement extends Components.ClientPanel, HTMLStencilElement {
    }
    var HTMLClientPanelElement: {
        prototype: HTMLClientPanelElement;
        new (): HTMLClientPanelElement;
    };
    interface HTMLClientViewElement extends Components.ClientView, HTMLStencilElement {
    }
    var HTMLClientViewElement: {
        prototype: HTMLClientViewElement;
        new (): HTMLClientViewElement;
    };
    interface HTMLFinalizePurchaseElement extends Components.FinalizePurchase, HTMLStencilElement {
    }
    var HTMLFinalizePurchaseElement: {
        prototype: HTMLFinalizePurchaseElement;
        new (): HTMLFinalizePurchaseElement;
    };
    interface HTMLMyBodyElement extends Components.MyBody, HTMLStencilElement {
    }
    var HTMLMyBodyElement: {
        prototype: HTMLMyBodyElement;
        new (): HTMLMyBodyElement;
    };
    interface HTMLMyFooterElement extends Components.MyFooter, HTMLStencilElement {
    }
    var HTMLMyFooterElement: {
        prototype: HTMLMyFooterElement;
        new (): HTMLMyFooterElement;
    };
    interface HTMLMyHeaderElement extends Components.MyHeader, HTMLStencilElement {
    }
    var HTMLMyHeaderElement: {
        prototype: HTMLMyHeaderElement;
        new (): HTMLMyHeaderElement;
    };
    interface HTMLOfferCarouselElement extends Components.OfferCarousel, HTMLStencilElement {
    }
    var HTMLOfferCarouselElement: {
        prototype: HTMLOfferCarouselElement;
        new (): HTMLOfferCarouselElement;
    };
    interface HTMLOptionsDrinksElement extends Components.OptionsDrinks, HTMLStencilElement {
    }
    var HTMLOptionsDrinksElement: {
        prototype: HTMLOptionsDrinksElement;
        new (): HTMLOptionsDrinksElement;
    };
    interface HTMLPlateFoodElement extends Components.PlateFood, HTMLStencilElement {
    }
    var HTMLPlateFoodElement: {
        prototype: HTMLPlateFoodElement;
        new (): HTMLPlateFoodElement;
    };
    interface HTMLRigthPanelElement extends Components.RigthPanel, HTMLStencilElement {
    }
    var HTMLRigthPanelElement: {
        prototype: HTMLRigthPanelElement;
        new (): HTMLRigthPanelElement;
    };
    interface HTMLSalesTableElement extends Components.SalesTable, HTMLStencilElement {
    }
    var HTMLSalesTableElement: {
        prototype: HTMLSalesTableElement;
        new (): HTMLSalesTableElement;
    };
    interface HTMLSandwichesFoodElement extends Components.SandwichesFood, HTMLStencilElement {
    }
    var HTMLSandwichesFoodElement: {
        prototype: HTMLSandwichesFoodElement;
        new (): HTMLSandwichesFoodElement;
    };
    interface HTMLTableOrdersElement extends Components.TableOrders, HTMLStencilElement {
    }
    var HTMLTableOrdersElement: {
        prototype: HTMLTableOrdersElement;
        new (): HTMLTableOrdersElement;
    };
    interface HTMLTodaysMenuElement extends Components.TodaysMenu, HTMLStencilElement {
    }
    var HTMLTodaysMenuElement: {
        prototype: HTMLTodaysMenuElement;
        new (): HTMLTodaysMenuElement;
    };
    interface HTMLUserInfoElement extends Components.UserInfo, HTMLStencilElement {
    }
    var HTMLUserInfoElement: {
        prototype: HTMLUserInfoElement;
        new (): HTMLUserInfoElement;
    };
    interface HTMLUserLoginElement extends Components.UserLogin, HTMLStencilElement {
    }
    var HTMLUserLoginElement: {
        prototype: HTMLUserLoginElement;
        new (): HTMLUserLoginElement;
    };
    interface HTMLUserRegisterElement extends Components.UserRegister, HTMLStencilElement {
    }
    var HTMLUserRegisterElement: {
        prototype: HTMLUserRegisterElement;
        new (): HTMLUserRegisterElement;
    };
    interface HTMLElementTagNameMap {
        "admin-order": HTMLAdminOrderElement;
        "admin-panel": HTMLAdminPanelElement;
        "admin-view": HTMLAdminViewElement;
        "alert-register": HTMLAlertRegisterElement;
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "client-deserts": HTMLClientDesertsElement;
        "client-panel": HTMLClientPanelElement;
        "client-view": HTMLClientViewElement;
        "finalize-purchase": HTMLFinalizePurchaseElement;
        "my-body": HTMLMyBodyElement;
        "my-footer": HTMLMyFooterElement;
        "my-header": HTMLMyHeaderElement;
        "offer-carousel": HTMLOfferCarouselElement;
        "options-drinks": HTMLOptionsDrinksElement;
        "plate-food": HTMLPlateFoodElement;
        "rigth-panel": HTMLRigthPanelElement;
        "sales-table": HTMLSalesTableElement;
        "sandwiches-food": HTMLSandwichesFoodElement;
        "table-orders": HTMLTableOrdersElement;
        "todays-menu": HTMLTodaysMenuElement;
        "user-info": HTMLUserInfoElement;
        "user-login": HTMLUserLoginElement;
        "user-register": HTMLUserRegisterElement;
    }
}
declare namespace LocalJSX {
    interface AdminOrder {
        "id"?: string;
    }
    interface AdminPanel {
    }
    interface AdminView {
    }
    interface AlertRegister {
        "id"?: string;
    }
    interface AppHome {
    }
    interface AppProfile {
        "match"?: MatchResults;
    }
    interface AppRoot {
    }
    interface ClientDeserts {
        "onSelectedDessert"?: (event: CustomEvent<Product>) => void;
    }
    interface ClientPanel {
    }
    interface ClientView {
    }
    interface FinalizePurchase {
        "id"?: string;
    }
    interface MyBody {
    }
    interface MyFooter {
    }
    interface MyHeader {
    }
    interface OfferCarousel {
    }
    interface OptionsDrinks {
        "onSelectedDrink"?: (event: CustomEvent<Product>) => void;
    }
    interface PlateFood {
        "onSelectedPlateFood"?: (event: CustomEvent<Product>) => void;
    }
    interface RigthPanel {
        "onSelectedSale"?: (event: CustomEvent<Order>) => void;
    }
    interface SalesTable {
    }
    interface SandwichesFood {
        "onSelectedSandwich"?: (event: CustomEvent<Product>) => void;
    }
    interface TableOrders {
        "onSelectedPurchase"?: (event: CustomEvent<Order>) => void;
    }
    interface TodaysMenu {
        "onSelectedMenu"?: (event: CustomEvent<Product>) => void;
    }
    interface UserInfo {
        "butonsChoice"?: string;
        "history"?: RouterHistory;
        "onLogOut"?: (event: CustomEvent<boolean>) => void;
        "profileChoice"?: string;
    }
    interface UserLogin {
        "history"?: RouterHistory;
        "onAuthenticaUser"?: (event: CustomEvent<boolean>) => void;
    }
    interface UserRegister {
        "hidden"?: boolean;
        "id"?: string;
    }
    interface IntrinsicElements {
        "admin-order": AdminOrder;
        "admin-panel": AdminPanel;
        "admin-view": AdminView;
        "alert-register": AlertRegister;
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "client-deserts": ClientDeserts;
        "client-panel": ClientPanel;
        "client-view": ClientView;
        "finalize-purchase": FinalizePurchase;
        "my-body": MyBody;
        "my-footer": MyFooter;
        "my-header": MyHeader;
        "offer-carousel": OfferCarousel;
        "options-drinks": OptionsDrinks;
        "plate-food": PlateFood;
        "rigth-panel": RigthPanel;
        "sales-table": SalesTable;
        "sandwiches-food": SandwichesFood;
        "table-orders": TableOrders;
        "todays-menu": TodaysMenu;
        "user-info": UserInfo;
        "user-login": UserLogin;
        "user-register": UserRegister;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "admin-order": LocalJSX.AdminOrder & JSXBase.HTMLAttributes<HTMLAdminOrderElement>;
            "admin-panel": LocalJSX.AdminPanel & JSXBase.HTMLAttributes<HTMLAdminPanelElement>;
            "admin-view": LocalJSX.AdminView & JSXBase.HTMLAttributes<HTMLAdminViewElement>;
            "alert-register": LocalJSX.AlertRegister & JSXBase.HTMLAttributes<HTMLAlertRegisterElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "client-deserts": LocalJSX.ClientDeserts & JSXBase.HTMLAttributes<HTMLClientDesertsElement>;
            "client-panel": LocalJSX.ClientPanel & JSXBase.HTMLAttributes<HTMLClientPanelElement>;
            "client-view": LocalJSX.ClientView & JSXBase.HTMLAttributes<HTMLClientViewElement>;
            "finalize-purchase": LocalJSX.FinalizePurchase & JSXBase.HTMLAttributes<HTMLFinalizePurchaseElement>;
            "my-body": LocalJSX.MyBody & JSXBase.HTMLAttributes<HTMLMyBodyElement>;
            "my-footer": LocalJSX.MyFooter & JSXBase.HTMLAttributes<HTMLMyFooterElement>;
            "my-header": LocalJSX.MyHeader & JSXBase.HTMLAttributes<HTMLMyHeaderElement>;
            "offer-carousel": LocalJSX.OfferCarousel & JSXBase.HTMLAttributes<HTMLOfferCarouselElement>;
            "options-drinks": LocalJSX.OptionsDrinks & JSXBase.HTMLAttributes<HTMLOptionsDrinksElement>;
            "plate-food": LocalJSX.PlateFood & JSXBase.HTMLAttributes<HTMLPlateFoodElement>;
            "rigth-panel": LocalJSX.RigthPanel & JSXBase.HTMLAttributes<HTMLRigthPanelElement>;
            "sales-table": LocalJSX.SalesTable & JSXBase.HTMLAttributes<HTMLSalesTableElement>;
            "sandwiches-food": LocalJSX.SandwichesFood & JSXBase.HTMLAttributes<HTMLSandwichesFoodElement>;
            "table-orders": LocalJSX.TableOrders & JSXBase.HTMLAttributes<HTMLTableOrdersElement>;
            "todays-menu": LocalJSX.TodaysMenu & JSXBase.HTMLAttributes<HTMLTodaysMenuElement>;
            "user-info": LocalJSX.UserInfo & JSXBase.HTMLAttributes<HTMLUserInfoElement>;
            "user-login": LocalJSX.UserLogin & JSXBase.HTMLAttributes<HTMLUserLoginElement>;
            "user-register": LocalJSX.UserRegister & JSXBase.HTMLAttributes<HTMLUserRegisterElement>;
        }
    }
}
