import { ReactElement } from 'react';
import { useFetch, useCounter } from '../../../hooks';
import { Quote } from '../../atoms/quote/Quote';
import { Loading } from '../../atoms/loading/Loading';

type BreakingBadQuotesProps = {
  id: number;
};

/* A Component that displays breaking bad quotes. 
It contains a prop id that defines the counter first value 
(which will be used to bring the quote by id)*/

/**
 * The function returns a BreakingBadQuotes component that displays a breaking bad quotes.
 * It contains a prop id that defines the counter first value
 * (which will be used to bring the quote by id).
 * @returns A SimpleForm with an `id` (number)
 */

export const BreakingBadQuotes = ({
  id,
}: BreakingBadQuotesProps): ReactElement => {
  const { increment, counter } = useCounter(id);

  const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`;

  const { data, isLoading, hasError } = useFetch(url);

  const { author, quote } = !!data && data[0];

  return (
    <div>
      {isLoading ? <Loading /> : <Quote description={quote} author={author} />}

      <button
        disabled={isLoading}
        className="btn btn-primary"
        onClick={() => increment()}
      >
        Next quote
      </button>
    </div>
  );
};
