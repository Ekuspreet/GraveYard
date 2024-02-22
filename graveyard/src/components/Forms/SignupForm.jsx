import React from 'react'
import { Input } from '@nextui-org/react'
const SignupForm = () => {
  return (
    <div>
<form className='w-80 gap-4 flex flex-col mt-4'>
<Input type="email" label="Email" placeholder="Enter your email" />
<Input type="text" label="Name" placeholder="Enter your Full Name" />
<Input type="text" label="Username" placeholder="Enter your unique username (@....)" />

<Input type="password" label="Password" placeholder="Enter your password" />
<Input type="password" label="Confirm Password" placeholder="Enter your password again" />
<Input type='submit' value='signup' /> 
</form>
    </div>
  )
}

export default SignupForm