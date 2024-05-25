import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'
import { Overlay, Content, CloseButton, TransactionType, TransactionButton } from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  // type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionsModal() {
  const { 
    register, 
    handleSubmit,
    formState: { isSubmitting } 
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input 
            type="text" 
            placeholder='Descrição' 
            autoFocus 
            required 
            {...register('description')} 
          />
          <input 
            type="number" 
            placeholder='Preço' 
            required 
            {...register('price', { valueAsNumber: true })} 
          />
          <input 
            type="text" 
            placeholder='Categoria' 
            required 
            {...register('category')} 
          />

          <TransactionType>
            <TransactionButton variant='income' value='income'>
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionButton>

            <TransactionButton variant='outcome' value='outcome'>
              <ArrowCircleDown size={24} />
              Saída
            </TransactionButton>
          </TransactionType>

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}