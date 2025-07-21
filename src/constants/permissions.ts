// Permission constants for each resource/action group

export const organizations = {
  CAN_VIEW_ORGANIZATION: "CAN_VIEW_ORGANIZATION",
  CAN_CREATE_ORGANIZATION: "CAN_CREATE_ORGANIZATION",
  CAN_UPDATE_ORGANIZATION: "CAN_UPDATE_ORGANIZATION",
  CAN_DELETE_ORGANIZATION: "CAN_DELETE_ORGANIZATION",
  CAN_VIEW_ALL_ORGANIZATIONS: "CAN_VIEW_ALL_ORGANIZATIONS",
} as const;

export const members = {
  CAN_VIEW_ALL_MEMBERS: "CAN_VIEW_ALL_MEMBERS",
  CAN_VIEW_ORGANIZATION_MEMBERS: "CAN_VIEW_ORGANIZATION_MEMBERS",
  CAN_CREATE_MEMBER: "CAN_CREATE_MEMBER",
  CAN_UPDATE_MEMBER: "CAN_UPDATE_MEMBER",
  CAN_DELETE_MEMBER: "CAN_DELETE_MEMBER",
  CAN_UPDATE_ANY_MEMBER: "CAN_UPDATE_ANY_MEMBER",
  CAN_DELETE_ANY_MEMBER: "CAN_DELETE_ANY_MEMBER",
} as const;

export const users = {
  CAN_VIEW_ALL_USERS: "CAN_VIEW_ALL_USERS",
  CAN_VIEW_USER: "CAN_VIEW_USER",
  CAN_CREATE_USER: "CAN_CREATE_USER",
  CAN_UPDATE_USER: "CAN_UPDATE_USER",
  CAN_DELETE_USER: "CAN_DELETE_USER",
  CAN_UPDATE_ANY_USER: "CAN_UPDATE_ANY_USER",
  CAN_DELETE_ANY_USER: "CAN_DELETE_ANY_USER",
} as const;

export const organizationCategories = {
  CAN_VIEW_ORGANIZATION_CATEGORIES: "CAN_VIEW_ORGANIZATION_CATEGORIES",
  CAN_CREATE_ORGANIZATION_CATEGORIES: "CAN_CREATE_ORGANIZATION_CATEGORIES",
  CAN_UPDATE_ORGANIZATION_CATEGORIES: "CAN_UPDATE_ORGANIZATION_CATEGORIES",
  CAN_DELETE_ORGANIZATION_CATEGORIES: "CAN_DELETE_ORGANIZATION_CATEGORIES",
} as const;

export const organizationServices = {
  CAN_VIEW_ORGANIZATION_SERVICES: "CAN_VIEW_ORGANIZATION_SERVICES",
  CAN_CREATE_ORGANIZATION_SERVICES: "CAN_CREATE_ORGANIZATION_SERVICES",
  CAN_UPDATE_ORGANIZATION_SERVICES: "CAN_UPDATE_ORGANIZATION_SERVICES",
  CAN_DELETE_ORGANIZATION_SERVICES: "CAN_DELETE_ORGANIZATION_SERVICES",
  CAN_VIEW_ALL_ORGANIZATION_SERVICES: "CAN_VIEW_ALL_ORGANIZATION_SERVICES",
  CAN_VIEW_ORGANIZATION_SERVICE: "CAN_VIEW_ORGANIZATION_SERVICE",
  // The following keys are from the duplicate block in the original code
  CAN_ASSIGN_SERVICE_TO_AN_ORGANIZATION:
    "CAN_ASSIGN_SERVICE_TO_AN_ORGANIZATION",
  CAN_VIEW_ALL_OFFERED_SERVICES: "CAN_VIEW_ALL_OFFERED_SERVICES",
  CAN_VIEW_OFFERED_SERVICE: "CAN_VIEW_OFFERED_SERVICE",
  CAN_UPDATE_OFFERED_SERVICE: "CAN_UPDATE_OFFERED_SERVICE",
  CAN_DELETE_OFFERED_SERVICE: "CAN_DELETE_OFFERED_SERVICE",
} as const;

export const services = {
  CAN_VIEW_SERVICES: "CAN_VIEW_SERVICES",
  CAN_CREATE_SERVICES: "CAN_CREATE_SERVICES",
  CAN_UPDATE_SERVICES: "CAN_UPDATE_SERVICES",
  CAN_DELETE_SERVICES: "CAN_DELETE_SERVICES",
} as const;

export const serviceCategories = {
  CAN_VIEW_SERVICE_CATEGORIES: "CAN_VIEW_SERVICE_CATEGORIES",
  CAN_CREATE_SERVICE_CATEGORIES: "CAN_CREATE_SERVICE_CATEGORIES",
  CAN_UPDATE_SERVICE_CATEGORIES: "CAN_UPDATE_SERVICE_CATEGORIES",
  CAN_DELETE_SERVICE_CATEGORIES: "CAN_DELETE_SERVICE_CATEGORIES",
  CAN_VIEW_SERVICE_TYPES: "CAN_VIEW_SERVICE_TYPES",
  CAN_CREATE_SERVICE_TYPES: "CAN_CREATE_SERVICE_TYPES",
} as const;

export const organizationRoles = {
  CAN_VIEW_ORGANIZATION_ROLES: "CAN_VIEW_ORGANIZATION_ROLES",
  CAN_CREATE_ORGANIZATION_ROLES: "CAN_CREATE_ORGANIZATION_ROLES",
  CAN_UPDATE_ORGANIZATION_ROLES: "CAN_UPDATE_ORGANIZATION_ROLES",
  CAN_DELETE_ORGANIZATION_ROLES: "CAN_DELETE_ORGANIZATION_ROLES",
} as const;

export const memberRoles = {
  CAN_VIEW_MEMBER_ROLES: "CAN_VIEW_MEMBER_ROLES",
  CAN_CREATE_MEMBER_ROLES: "CAN_CREATE_MEMBER_ROLES",
  CAN_UPDATE_MEMBER_ROLES: "CAN_UPDATE_MEMBER_ROLES",
  CAN_DELETE_MEMBER_ROLES: "CAN_DELETE_MEMBER_ROLES",
  CAN_VIEW_MEMBER_STATISTICS: "CAN_VIEW_MEMBER_STATISTICS",
} as const;

export const memberServices = {
  CAN_VIEW_MEMBER_SERVICES: "CAN_VIEW_MEMBER_SERVICES",
  CAN_ASSIGN_SERVICE_TO_A_MEMBER: "CAN_ASSIGN_SERVICE_TO_A_MEMBER",
  CAN_UPDATE_MEMBER_SERVICE: "CAN_UPDATE_MEMBER_SERVICE",
  CAN_DELETE_MEMBER_SERVICE: "CAN_DELETE_MEMBER_SERVICE",
} as const;

export const yieldCollection = {
  CAN_COLLECT_YIELD: "CAN_COLLECT_YIELD",
  CAN_VIEW_YIELD_COLLECTIONS: "CAN_VIEW_YIELD_COLLECTIONS",
  CAN_MAKE_YIELD_COLLECTION_PAYMENTS: "CAN_VIEW_YIELD_COLLECTIONS",
};

export const yieldCollectionPayments = {
  CAN_MAKE_YIELD_COLLECTION_PAYMENTS: "CAN_MAKE_YIELD_COLLECTION_PAYMENTS",
  CAN_VIEW_YIELD_COLLECTION_PAYMENTS: "CAN_VIEW_YIELD_COLLECTION_PAYMENTS",
  CAN_UPDATE_YIELD_COLLECTION_PAYMENTS: "CAN_UPDATE_YIELD_COLLECTION_PAYMENTS",
};

export const serviceTransactions = {
  CAN_VIEW_SERVICE_TRANSACTIONS: "CAN_VIEW_SERVICE_TRANSACTIONS",
} as const;

// Types for enum values using the exported constants
export type OrganizationPermission =
  (typeof organizations)[keyof typeof organizations];
export type MemberPermission = (typeof members)[keyof typeof members];
export type UserPermission = (typeof users)[keyof typeof users];
export type OrganizationCategoryPermission =
  (typeof organizationCategories)[keyof typeof organizationCategories];
export type OrganizationServicePermission =
  (typeof organizationServices)[keyof typeof organizationServices];
export type OrganizationRolePermission =
  (typeof organizationRoles)[keyof typeof organizationRoles];
export type MemberRolePermission =
  (typeof memberRoles)[keyof typeof memberRoles];
export type ServiceCategoryPermission =
  (typeof serviceCategories)[keyof typeof serviceCategories];
export type MemberServicePermission =
  (typeof memberServices)[keyof typeof memberServices];
export type ServiceTransactionPermission =
  (typeof serviceTransactions)[keyof typeof serviceTransactions];
export type ServicePermission = (typeof services)[keyof typeof services];
export type YieldCollectionPermission =
  (typeof yieldCollection)[keyof typeof yieldCollection];
// Combined permission type
export type Permission =
  | OrganizationPermission
  | MemberPermission
  | UserPermission
  | OrganizationCategoryPermission
  | OrganizationServicePermission
  | OrganizationRolePermission
  | MemberRolePermission
  | ServiceCategoryPermission
  | MemberServicePermission
  | ServiceTransactionPermission
  | ServicePermission
  | YieldCollectionPermission;
