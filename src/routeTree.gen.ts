/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LoginImport } from './routes/login'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as AuthenticatedIndexImport } from './routes/_authenticated/index'
import { Route as AuthenticatedPOPoPoIdImport } from './routes/_authenticated/(PO)/po.$poId'

// Create Virtual Routes

const AuthenticatedinspectionsInspectionsLazyImport = createFileRoute(
  '/_authenticated/(inspections)/inspections',
)()
const AuthenticatedPOPurchaseordersLazyImport = createFileRoute(
  '/_authenticated/(PO)/purchase_orders',
)()

// Create/Update Routes

const LoginRoute = LoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedIndexRoute = AuthenticatedIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedinspectionsInspectionsLazyRoute =
  AuthenticatedinspectionsInspectionsLazyImport.update({
    id: '/(inspections)/inspections',
    path: '/inspections',
    getParentRoute: () => AuthenticatedRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/(inspections)/inspections.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedPOPurchaseordersLazyRoute =
  AuthenticatedPOPurchaseordersLazyImport.update({
    id: '/(PO)/purchase_orders',
    path: '/purchase_orders',
    getParentRoute: () => AuthenticatedRoute,
  } as any).lazy(() =>
    import('./routes/_authenticated/(PO)/purchase_orders.lazy').then(
      (d) => d.Route,
    ),
  )

const AuthenticatedPOPoPoIdRoute = AuthenticatedPOPoPoIdImport.update({
  id: '/(PO)/po/$poId',
  path: '/po/$poId',
  getParentRoute: () => AuthenticatedRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated/': {
      id: '/_authenticated/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof AuthenticatedIndexImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/(PO)/purchase_orders': {
      id: '/_authenticated/(PO)/purchase_orders'
      path: '/purchase_orders'
      fullPath: '/purchase_orders'
      preLoaderRoute: typeof AuthenticatedPOPurchaseordersLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/(inspections)/inspections': {
      id: '/_authenticated/(inspections)/inspections'
      path: '/inspections'
      fullPath: '/inspections'
      preLoaderRoute: typeof AuthenticatedinspectionsInspectionsLazyImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/(PO)/po/$poId': {
      id: '/_authenticated/(PO)/po/$poId'
      path: '/po/$poId'
      fullPath: '/po/$poId'
      preLoaderRoute: typeof AuthenticatedPOPoPoIdImport
      parentRoute: typeof AuthenticatedImport
    }
  }
}

// Create and export the route tree

interface AuthenticatedRouteChildren {
  AuthenticatedIndexRoute: typeof AuthenticatedIndexRoute
  AuthenticatedPOPurchaseordersLazyRoute: typeof AuthenticatedPOPurchaseordersLazyRoute
  AuthenticatedinspectionsInspectionsLazyRoute: typeof AuthenticatedinspectionsInspectionsLazyRoute
  AuthenticatedPOPoPoIdRoute: typeof AuthenticatedPOPoPoIdRoute
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedIndexRoute: AuthenticatedIndexRoute,
  AuthenticatedPOPurchaseordersLazyRoute:
    AuthenticatedPOPurchaseordersLazyRoute,
  AuthenticatedinspectionsInspectionsLazyRoute:
    AuthenticatedinspectionsInspectionsLazyRoute,
  AuthenticatedPOPoPoIdRoute: AuthenticatedPOPoPoIdRoute,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

export interface FileRoutesByFullPath {
  '': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/': typeof AuthenticatedIndexRoute
  '/purchase_orders': typeof AuthenticatedPOPurchaseordersLazyRoute
  '/inspections': typeof AuthenticatedinspectionsInspectionsLazyRoute
  '/po/$poId': typeof AuthenticatedPOPoPoIdRoute
}

export interface FileRoutesByTo {
  '/login': typeof LoginRoute
  '/': typeof AuthenticatedIndexRoute
  '/purchase_orders': typeof AuthenticatedPOPurchaseordersLazyRoute
  '/inspections': typeof AuthenticatedinspectionsInspectionsLazyRoute
  '/po/$poId': typeof AuthenticatedPOPoPoIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authenticated': typeof AuthenticatedRouteWithChildren
  '/login': typeof LoginRoute
  '/_authenticated/': typeof AuthenticatedIndexRoute
  '/_authenticated/(PO)/purchase_orders': typeof AuthenticatedPOPurchaseordersLazyRoute
  '/_authenticated/(inspections)/inspections': typeof AuthenticatedinspectionsInspectionsLazyRoute
  '/_authenticated/(PO)/po/$poId': typeof AuthenticatedPOPoPoIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/login'
    | '/'
    | '/purchase_orders'
    | '/inspections'
    | '/po/$poId'
  fileRoutesByTo: FileRoutesByTo
  to: '/login' | '/' | '/purchase_orders' | '/inspections' | '/po/$poId'
  id:
    | '__root__'
    | '/_authenticated'
    | '/login'
    | '/_authenticated/'
    | '/_authenticated/(PO)/purchase_orders'
    | '/_authenticated/(inspections)/inspections'
    | '/_authenticated/(PO)/po/$poId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
  LoginRoute: typeof LoginRoute
}

const rootRouteChildren: RootRouteChildren = {
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
  LoginRoute: LoginRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authenticated",
        "/login"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/",
        "/_authenticated/(PO)/purchase_orders",
        "/_authenticated/(inspections)/inspections",
        "/_authenticated/(PO)/po/$poId"
      ]
    },
    "/login": {
      "filePath": "login.tsx"
    },
    "/_authenticated/": {
      "filePath": "_authenticated/index.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/(PO)/purchase_orders": {
      "filePath": "_authenticated/(PO)/purchase_orders.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/(inspections)/inspections": {
      "filePath": "_authenticated/(inspections)/inspections.lazy.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/(PO)/po/$poId": {
      "filePath": "_authenticated/(PO)/po.$poId.tsx",
      "parent": "/_authenticated"
    }
  }
}
ROUTE_MANIFEST_END */