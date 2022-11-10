'use client';

import { z } from "zod"
import { useForm, ValidationError } from '@formspree/react';
import { useId } from "react";
import styles from "./ContactForm.module.css"
import { TbCheck } from "@react-icons/all-files/tb/TbCheck"
import { AiOutlineLoading } from "@react-icons/all-files/ai/AiOutlineLoading"

const envSchema = z.object({
  NEXT_PUBLIC_FORMSPREE_TOKEN: z.string()
})

const env = envSchema.parse({

  // gotta be like this for the transform to work correctly
  NEXT_PUBLIC_FORMSPREE_TOKEN: process.env.NEXT_PUBLIC_FORMSPREE_TOKEN
})

export const ContactForm = () => {

  const [state, handleSubmit] = useForm(env.NEXT_PUBLIC_FORMSPREE_TOKEN);

  const emailId = useId()
  const messageId = useId()

  if (state.succeeded) {
    return (
      <div className={styles.successContainer}>
        <TbCheck size={24} color="#68c968" />
        <span>Thank you, I will be in contact very soon.</span>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>

      <div className={styles.formArea}>
        <label htmlFor={emailId} className={styles.label}>Email</label>
        <input id={emailId} type="email" name="email" className={styles.input} />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className={styles.error}
        />
      </div>

      <div className={styles.formArea}>
        <label htmlFor={messageId} className={styles.label}>Message</label>
        <textarea id={messageId} name="message" className={styles.textarea} />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className={styles.error}
        />
      </div>

      <button type="submit" disabled={state.submitting} className={styles.submit}>
        {state.submitting ? "Submitting" : "Submit"}{state.submitting && <AiOutlineLoading className={styles.loadingSpinner} />}
      </button>
    </form>
  )
}
