'use client'

import { Form, FormControl, FormField, FormItem } from './ui/form'

import Action from './Action'
import { Input } from './ui/input'
import { Send } from 'lucide-react'
import { Textarea } from './ui/textarea'
import { useForm } from 'react-hook-form'
import { useToast } from './ui/use-toast'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  name: z.string().max(50),
  email: z.string().email(),
  message: z.string().max(500),
})

const ContactForm = () => {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    form.formState.errors
  }

  const onAction = () => {
    console.log(form.formState.errors)

    if (form.formState.errors.name) {
      toast({
        description: form.formState.errors.name.message,
        variant: 'destructive',
      })
    }

    if (form.formState.errors.email) {
      toast({
        description: form.formState.errors.email.message,
        variant: 'destructive',
      })
    }

    if (form.formState.errors.message) {
      toast({
        description: form.formState.errors.message.message,
        variant: 'destructive',
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Name"
                  {...field}
                  className="border-primary text-lg p-4"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  {...field}
                  className="border-primary text-lg p-4"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Type your message here."
                  {...field}
                  className="border-primary text-lg p-4"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex flex-row-reverse">
          <Action
            className="text-lg"
            type="submit"
            variant={'primary'}
            onClick={onAction}
          >
            <Send />
            Send
          </Action>
        </div>
      </form>
    </Form>
  )
}

export default ContactForm
