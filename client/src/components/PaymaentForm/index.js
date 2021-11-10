import React, { useState } from 'react'
import {
  CardCvcElement,
  CardElement,
  useElements,
  useStripe
} from '@stripe/react-stripe-js'

import axios from 'axios'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#c4f0ff',
      color: 'indianred',
      backgroundColor: '#757575',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#87bbfd' }
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee'
    }
  }
}

const PaymentForm = () => {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })
    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await axios.post(
          'http://localhost:8080/api/v1/payment',
          {
            amount: 1000,
            id
          }
        )
        if (response.data.success) {
          console.log('Payment successfully!')
          setSuccess(true)
        }
      } catch (e) {
        console.log('error>>', e)
      }
    } else {
      console.log(error.message)
    }
  }
  return (
    <>
      {!success} ? (
      <form onSubmit={handleSubmit}>
        <fieldset className="FormCroup">
          <div className="FormRow">
            <CardCvcElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <button
          className="bg-green-500 px-8 py-2 text-white pt-4"
          type="submit"
        >
          Pay
        </button>
      </form>
      ) : (
      <div>
        <h2>Payment was successfully!</h2>
      </div>
      )
    </>
  )
}

export default PaymentForm
