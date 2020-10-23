/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil/router";
import { Drink } from "./models.ts/drink.model";
import { Menu } from "./models.ts/menu.model";
export namespace Components {
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
    interface ClientPanel {
    }
    interface ClientView {
    }
    interface MyBody {
    }
    interface MyFooter {
    }
    interface MyHeader {
        "butonsChoice": string;
        "profileChoice": string;
    }
    interface OfferCarousel {
    }
    interface OptionsDrinks {
    }
    interface PlateFood {
    }
    interface RigthPanel {
    }
    interface SandwichesFood {
    }
    interface TodaysMenu {
    }
    interface UserLogin {
        "handleLogin": (e: any) => Promise<void>;
        "hidden": boolean;
        "id": string;
        "url": string;
    }
    interface UserRegister {
        "hidden": boolean;
        "id": string;
    }
}
declare global {
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
    interface HTMLSandwichesFoodElement extends Components.SandwichesFood, HTMLStencilElement {
    }
    var HTMLSandwichesFoodElement: {
        prototype: HTMLSandwichesFoodElement;
        new (): HTMLSandwichesFoodElement;
    };
    interface HTMLTodaysMenuElement extends Components.TodaysMenu, HTMLStencilElement {
    }
    var HTMLTodaysMenuElement: {
        prototype: HTMLTodaysMenuElement;
        new (): HTMLTodaysMenuElement;
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
        "admin-view": HTMLAdminViewElement;
        "alert-register": HTMLAlertRegisterElement;
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "client-panel": HTMLClientPanelElement;
        "client-view": HTMLClientViewElement;
        "my-body": HTMLMyBodyElement;
        "my-footer": HTMLMyFooterElement;
        "my-header": HTMLMyHeaderElement;
        "offer-carousel": HTMLOfferCarouselElement;
        "options-drinks": HTMLOptionsDrinksElement;
        "plate-food": HTMLPlateFoodElement;
        "rigth-panel": HTMLRigthPanelElement;
        "sandwiches-food": HTMLSandwichesFoodElement;
        "todays-menu": HTMLTodaysMenuElement;
        "user-login": HTMLUserLoginElement;
        "user-register": HTMLUserRegisterElement;
    }
}
declare namespace LocalJSX {
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
    interface ClientPanel {
    }
    interface ClientView {
    }
    interface MyBody {
    }
    interface MyFooter {
    }
    interface MyHeader {
        "butonsChoice"?: string;
        "profileChoice"?: string;
    }
    interface OfferCarousel {
    }
    interface OptionsDrinks {
        "onDrinkSelected"?: (event: CustomEvent<Drink>) => void;
    }
    interface PlateFood {
    }
    interface RigthPanel {
    }
    interface SandwichesFood {
    }
    interface TodaysMenu {
        "onMenuSelected"?: (event: CustomEvent<Menu>) => void;
    }
    interface UserLogin {
        "hidden"?: boolean;
        "id"?: string;
        "url"?: string;
    }
    interface UserRegister {
        "hidden"?: boolean;
        "id"?: string;
    }
    interface IntrinsicElements {
        "admin-view": AdminView;
        "alert-register": AlertRegister;
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "client-panel": ClientPanel;
        "client-view": ClientView;
        "my-body": MyBody;
        "my-footer": MyFooter;
        "my-header": MyHeader;
        "offer-carousel": OfferCarousel;
        "options-drinks": OptionsDrinks;
        "plate-food": PlateFood;
        "rigth-panel": RigthPanel;
        "sandwiches-food": SandwichesFood;
        "todays-menu": TodaysMenu;
        "user-login": UserLogin;
        "user-register": UserRegister;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "admin-view": LocalJSX.AdminView & JSXBase.HTMLAttributes<HTMLAdminViewElement>;
            "alert-register": LocalJSX.AlertRegister & JSXBase.HTMLAttributes<HTMLAlertRegisterElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "client-panel": LocalJSX.ClientPanel & JSXBase.HTMLAttributes<HTMLClientPanelElement>;
            "client-view": LocalJSX.ClientView & JSXBase.HTMLAttributes<HTMLClientViewElement>;
            "my-body": LocalJSX.MyBody & JSXBase.HTMLAttributes<HTMLMyBodyElement>;
            "my-footer": LocalJSX.MyFooter & JSXBase.HTMLAttributes<HTMLMyFooterElement>;
            "my-header": LocalJSX.MyHeader & JSXBase.HTMLAttributes<HTMLMyHeaderElement>;
            "offer-carousel": LocalJSX.OfferCarousel & JSXBase.HTMLAttributes<HTMLOfferCarouselElement>;
            "options-drinks": LocalJSX.OptionsDrinks & JSXBase.HTMLAttributes<HTMLOptionsDrinksElement>;
            "plate-food": LocalJSX.PlateFood & JSXBase.HTMLAttributes<HTMLPlateFoodElement>;
            "rigth-panel": LocalJSX.RigthPanel & JSXBase.HTMLAttributes<HTMLRigthPanelElement>;
            "sandwiches-food": LocalJSX.SandwichesFood & JSXBase.HTMLAttributes<HTMLSandwichesFoodElement>;
            "todays-menu": LocalJSX.TodaysMenu & JSXBase.HTMLAttributes<HTMLTodaysMenuElement>;
            "user-login": LocalJSX.UserLogin & JSXBase.HTMLAttributes<HTMLUserLoginElement>;
            "user-register": LocalJSX.UserRegister & JSXBase.HTMLAttributes<HTMLUserRegisterElement>;
        }
    }
}
