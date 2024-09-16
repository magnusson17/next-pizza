export function ZodErrors({ error }) {
    if (!error) return null;
    return error.map((err, index) => (
        <div key={index} className="">
            {err}
        </div>
    ));
}