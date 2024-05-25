/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SettingIndexImport } from './routes/setting.index'
import { Route as ProfileIndexImport } from './routes/profile.index'
import { Route as LoginIndexImport } from './routes/login.index'
import { Route as EditorIndexImport } from './routes/editor.index'
import { Route as ArticleSlugImport } from './routes/article.$slug'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const SettingIndexRoute = SettingIndexImport.update({
  path: '/setting/',
  getParentRoute: () => rootRoute,
} as any)

const ProfileIndexRoute = ProfileIndexImport.update({
  path: '/profile/',
  getParentRoute: () => rootRoute,
} as any)

const LoginIndexRoute = LoginIndexImport.update({
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const EditorIndexRoute = EditorIndexImport.update({
  path: '/editor/',
  getParentRoute: () => rootRoute,
} as any)

const ArticleSlugRoute = ArticleSlugImport.update({
  path: '/article/$slug',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/article/$slug': {
      id: '/article/$slug'
      path: '/article/$slug'
      fullPath: '/article/$slug'
      preLoaderRoute: typeof ArticleSlugImport
      parentRoute: typeof rootRoute
    }
    '/editor/': {
      id: '/editor/'
      path: '/editor'
      fullPath: '/editor'
      preLoaderRoute: typeof EditorIndexImport
      parentRoute: typeof rootRoute
    }
    '/login/': {
      id: '/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/profile/': {
      id: '/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileIndexImport
      parentRoute: typeof rootRoute
    }
    '/setting/': {
      id: '/setting/'
      path: '/setting'
      fullPath: '/setting'
      preLoaderRoute: typeof SettingIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  ArticleSlugRoute,
  EditorIndexRoute,
  LoginIndexRoute,
  ProfileIndexRoute,
  SettingIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/article/$slug",
        "/editor/",
        "/login/",
        "/profile/",
        "/setting/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/article/$slug": {
      "filePath": "article.$slug.tsx"
    },
    "/editor/": {
      "filePath": "editor.index.tsx"
    },
    "/login/": {
      "filePath": "login.index.tsx"
    },
    "/profile/": {
      "filePath": "profile.index.tsx"
    },
    "/setting/": {
      "filePath": "setting.index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
