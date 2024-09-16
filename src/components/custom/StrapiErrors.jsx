export function StrapiErrors( { error }) {
    if (!error?.message) return null;
    return <div className="">{error.message}</div>;
}