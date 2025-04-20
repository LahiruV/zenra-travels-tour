import { TextField, Button } from '@zenra/widgets';
import { UserIcon, EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { useAppDispatch } from '@zenra/store';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();

  return (
    <form className="space-y-6">
      <TextField
        label="Full name"
        id="name"
        name="name"
        type="text"
        autoComplete="name"
        required
        startIcon={<UserIcon className="h-5 w-5 text-gray-400" />}
      />

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
        autoComplete="new-password"
        required
        startIcon={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
      />

      <TextField
        label="Confirm password"
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        autoComplete="new-password"
        required
        startIcon={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
      />

      <Button type="submit" fullWidth size="large" variant="primary">
        Create account
      </Button>
    </form>
  );
};