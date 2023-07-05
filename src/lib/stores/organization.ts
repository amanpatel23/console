import { page } from '$app/stores';
import { derived, writable } from 'svelte/store';
import type { Models } from '@appwrite.io/console';

export type Team = Models.Team<Record<string, unknown>> & {
    billingBudget: number;
    billingPlan: string;
    budgetAlert: number[];
    paymentMethodId: string;
    backupPaymentMethodId: string;
};

export const newOrgModal = writable<boolean>(false);
export const newMemberModal = writable<boolean>(false);
export const organizationList = derived(
    page,
    ($page) => $page.data.organizations as Models.TeamList<Record<string, unknown>>
);
export const organization = derived(page, ($page) => $page.data?.organization as Team);
export const members = derived(page, ($page) => $page.data.members as Models.MembershipList);
