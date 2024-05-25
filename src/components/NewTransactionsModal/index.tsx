import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'
import { Overlay, Content, CloseButton, TransactionType, TransactionButton } from './styles'

export function NewTransactionsModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form>
          <input type="text" placeholder='Descrição' autoFocus required />
          <input type="number" placeholder='Preço' required />
          <input type="text" placeholder='Categoria' required />

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

          <button type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}