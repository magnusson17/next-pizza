export function StrapiErrors( { error }) {
    if (!error?.message) return null;
    return  <div>{error.message}</div>;
}