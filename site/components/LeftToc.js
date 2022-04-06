
function LeftToc({data}) {
  return (
    <div className="w-2/5 flex flex-col">
      {Object.entries(data).map(([key, value]) => {
        return (
          <div className="mt-4 font-bold text-lg" key={key}>
            {key}
            <div>
              {value.children.map((child) => {
                return (
                  <div className="ml-2 mt-4 font-normal text-base">
                    {child.name}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LeftToc