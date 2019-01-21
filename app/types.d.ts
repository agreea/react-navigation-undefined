interface Obj<T> {
  [key: string]: T
}

type scalar = number | string | boolean | undefined
type primitive = scalar | object

type Omit<T, K extends keyof T> = T extends any
  ? Pick<T, Exclude<keyof T, K>>
  : never

declare module 'react-native-simple-store' {
  interface Store {
    delete: (key: string) => Promise<void>
    get: (key: string) => Promise<primitive>
    push: (key: string, value: any) => Promise<void>
    save: (key: string, value: any) => Promise<void>
    update: (key: string, value: any) => Promise<void>
  }
  const store: Store
  export default store
}

declare module 'react-navigation-tabs' {
  type TabBarBottomType = React.Component<any, any>
  const TabBarBottom: TabBarBottomType
  export { TabBarBottom }
}

declare module 'rollbar-react-native' {
  type RollbarMethod = (
    message: Error | string,
    extra?: any,
    callback?: () => void
  ) => void
  interface RollbarConstructor {
    new (id: string): Rollbar
  }
  interface Rollbar {
    log: RollbarMethod
    debug: RollbarMethod
    warning: RollbarMethod
    error: RollbarMethod
    critical: RollbarMethod
    setPerson: (id: number, name: string, phone: string) => void
    clearPerson: () => void
  }
  const Client: RollbarConstructor
  export { Client }
}

declare module 'appcenter-crashes' {
  interface Crashes {
    isEnabled: () => Promise<boolean>
    generateTestCrash: () => void
  }
  const Crashes: Crashes
  export default Crashes
}

// gross hack to allow json imports
declare module '*.json' {
  const value: any
  export default value
}

declare type NUMIAlpha = 0.87 | 0.54 | 0.26 | 0.12

declare type navigateFn = (route: string, params?: object) => void

interface Navigation<P = Obj<any>> {
  goBack: (v: null) => void
  popToTop: () => void
  navigate: navigateFn
  setParams: (params: object) => void
  state: {
    params: P
    title?: string
    key: string
  }
}

type ApolloComponentParams = {
  loading: boolean
  error: Error
  data: any
}

interface CartItem {
  item: Item
  lastPriceQuote: PriceQuote
  quantity: number
}

interface Product {
  id: number
  description?: string
  brand: string
  imageUrl: string
  name: string
  variants: Array<ProductVariant>
}

interface ProductVariant {
  id: number
  product: Product
  productName: string
  wholesalePrice: number
  name: number
  availableStock: number
  imageUrl: string
  description?: string
}

interface ProductCartItem {
  VariantId: number
  variant?: ProductVariant
  quantity: number
}

interface Item {
  id: number
  name: string
  manufacturer: string
  priceQuote: PriceQuote
}

interface AlgoliaItem extends Item {
  objectID: string
  basePrice: number
}

interface PriceQuote {
  tradePrice: number
  discount: number
  vat: number
}
// Graphql Types
declare module '*.graphql' {
  import { DocumentNode } from 'graphql'

  const value: DocumentNode
  export default value
}

declare module '*.gql' {
  import { DocumentNode } from 'graphql'

  const value: DocumentNode
  export default value
}

interface GraphqlTypeName {
  __typename: string
}

type GraphqlCartItem = CartItem & GraphqlTypeName

interface CartState {
  cart: {
    items: Array<GraphqlCartItem>
    __typename: string
  }
}

interface ProductCartState {
  productCart: {
    items: Array<ProductCartItem>
    sessionKey: string
  }
}

interface Organization {
  name: string
  id?: number
  users?: Array<User>
}

interface BuyerPriceItem {
  item: Item
  quantity: number
  buyerPrice: {
    id?: number
    price: number
    available: boolean
    organization: Organization
  }
}

interface Invoice {
  id: number
  OrderId: number
  createdAt: Date
  lineItems?: Array<InvoiceLineItem>
}

interface InvoiceLineItem {
  id: number
  position: number
  price: number
  quantity: number
  variant: ProductVariant
  orderLineItemId: number
  invoiceId: number
  imageUrl: string
  orderLineItem?: any
}

interface QuoteStatus {
  id: number
  createdAt: number
  approved?: boolean
  approvedAt?: number
  pendingItems: Array<BuyerPriceItem>
  quotedItems: Array<BuyerPriceItem>
  requestingUser?: User
}

interface User {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  token: string
  organization?: Organization
}

interface PendingQuoteListItem {
  createdAt: number
  id: number
  label: string
  onPress: () => void
}

interface FirebaseMessagePayload {
  [k: string]: string | FirebaseMessagePayload | number | boolean | null
}

interface Department {
  id: string
  name: string
  imageUrl: string
  categories?: Array<Category>
}

interface Category {
  id: string
  name: string
  products: Array<Product>
}

interface CatalogScreenNavigationParameters {
  id: string
  name: string
}
