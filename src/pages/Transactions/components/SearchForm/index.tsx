import { MagnifyingGlass } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SearchFormContainer } from "./styles";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { 
    register, 
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchTransactions(data: SearchInputs) {
    console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input 
        type="text" 
        placeholder="Busque por transações" 
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}