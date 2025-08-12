import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68912513ad0afb2f9ef8e119", 
  requiresAuth: true // Ensure authentication is required for all operations
});
