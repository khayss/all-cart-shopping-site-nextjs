import { Cart, CartAction, CartActionTypes } from "@/types/product.type";

export const initialCartState: Cart = {
  itemsCount: 0,
  items: {},
};

export const CartReducer = (state: Cart, action: CartAction): Cart => {
  switch (action.type) {
    case CartActionTypes.ADD:
      return state.items[action.payload.id]
        ? {
            itemsCount: state.itemsCount - 1,
            items: { ...state.items, [action.payload.id]: null },
          }
        : {
            itemsCount: state.itemsCount + 1,
            items: {
              ...state.items,
              [action.payload.id]: {
                ...action.payload,
                quantity: 1,
              },
            },
          };
    case CartActionTypes.REMOVE:
      return state.items[action.payload]
        ? {
            itemsCount: state.itemsCount - 1,
            items: { ...state.items, [action.payload]: null },
          }
        : state;
    // case CartActionTypes.CHANGE:
    //   return state.items[action.payload.id]
    //     ? {
    //         ...state,
    //         items: {
    //           ...state.items,
    //           [action.payload.id]: {
    //             ...state.items[action.payload.id],
    //             quantity:
    //               action.payload.e.target.value === ""
    //                 ? ""
    //                 : Math.abs(action.payload.e.target.value),
    //           },
    //         },
    //       }
    //     : state;
    // case CartActionTypes.BLUR:
    //   return state.items[action.payload.id]
    //     ? {
    //         ...state,
    //         items: {
    //           ...state.items,
    //           [action.payload.id]: {
    //             ...state.items[action.payload.id],
    //             quantity:
    //               action.payload.e.target.value == "" ||
    //               action.payload.e.target.value == "0"
    //                 ? 1
    //                 : action.payload.e.target.value >
    //                   state.items[action.payload.id].stock
    //                 ? state.items[action.payload.id].stock
    //                 : Math.abs(action.payload.e.target.value),
    //           },
    //         },
    //       }
    //     : state;
    case CartActionTypes.INCREASE: {
      const item = state.items[action.payload];
      return item
        ? {
            ...state,
            items: {
              ...state.items,
              [action.payload]: {
                ...item,
                quantity:
                  item.quantity + 1 > item.stock
                    ? item.stock
                    : item.quantity + 1,
              },
            },
          }
        : state;
    }
    case CartActionTypes.DECREASE: {
      const item = state.items[action.payload];
      return item
        ? {
            ...state,
            items: {
              ...state.items,
              [action.payload]: {
                ...item,
                quantity: item.quantity - 1 > 1 ? 1 : item.quantity - 1,
              },
            },
          }
        : state;
    }

    case CartActionTypes.RESET:
      return initialCartState;
    default:
      return state;
  }
};
