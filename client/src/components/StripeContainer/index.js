import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from '../PaymaentForm'

const PUBLIC_KEY =
  'pk_test_51JuJYrCdLHTlBDWSEFT026QVjigMvRkNXwx50i6d5Nt5S8w0I5mX5ZYQxaARCC7xTzccBvzby6L3ikg4j0v5MNEr00dTI7Jqh1'
const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => (
  <div>
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  </div>
)

export default StripeContainer
