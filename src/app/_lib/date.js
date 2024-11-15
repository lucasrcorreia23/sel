// src/app/_lib/date.js
import { format } from "date-fns";

const DateComponent = ({ dateString }) => {
  // Função para verificar se a data é válida
  const isValidDate = (date) => {
    return date instanceof Date && !isNaN(date);
  };

  // Se `dateString` estiver ausente, exibe uma mensagem padrão
  if (!dateString) {
    return <span>Data indisponível</span>;
  }

  // Tenta converter `dateString` para um objeto Date
  const date = new Date(dateString);

  // Verifica se a data é válida antes de formatá-la
  if (!isValidDate(date)) {
    return <span>Data inválida</span>;
  }

  // Se a data for válida, formata e exibe
  return <time dateTime={dateString}>{format(date, "dd MMM yyyy")}</time>;
};

export default DateComponent;
