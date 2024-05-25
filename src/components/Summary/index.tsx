import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from '@phosphor-icons/react'
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  console.log(transactions)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>R$ 17.000,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>R$ 17.000,00</strong>
      </SummaryCard>

      <SummaryCard variant="green">
        <header>
          <span>Entradas</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>

        <strong>R$ 17.000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}