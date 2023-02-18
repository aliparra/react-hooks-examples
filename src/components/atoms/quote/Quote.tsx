type QuotePropTypes = {
  description: string;
  author: string;
};

/**
 * It's a function that takes in a description and an author and returns a blockquote with the
 * `description` (string) and `author` (string)
 * @param {QuotePropTypes}  - QuotePropTypes
 * @returns A Quote component.
 */

export const Quote = ({ description, author }: QuotePropTypes) => {
  return (
    <>
      <blockquote className="blockquote text-end">
        <div>
          <p>"{description}"</p>
          <footer>{author}</footer>
        </div>
      </blockquote>
    </>
  );
};
