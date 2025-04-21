import { TextField, Button } from '@zenra/widgets';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';

export const LoginForm = () => {

  return (
    <form className="space-y-6">
      <TextField
        label="Email address"
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        startIcon={<EnvelopeIcon className="h-5 w-5 text-gray-400" />}
      />

      <TextField
        label="Password"
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        startIcon={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
            Remember me
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
            Forgot your password?
          </a>
        </div>
      </div>

      <Button type="submit" fullWidth size="large" variant="primary">
        Sign in
      </Button>
    </form>
  );
};