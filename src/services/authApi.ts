import { useMutation } from '@tanstack/react-query';
import { LoginCredentials, RegisterCredentials, AuthResponse } from '@zenra/models';

export const useLogin = () => {
  return useMutation({
    mutationFn: async (credentials: LoginCredentials): Promise<AuthResponse> => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to login');
      }

      return response.json();
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: async (credentials: RegisterCredentials): Promise<AuthResponse> => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Failed to register');
      }

      return response.json();
    },
  });
};