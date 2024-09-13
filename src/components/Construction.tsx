const ConstructionSite = () => {
  return (
    <section className="flex flex-col gap-8" id="raid-progression">
      <div>
        <h2 className="text-2xl">Raid Progression</h2>
        <p className="text-orange">See how far we&apos;ve made it this tier!</p>
      </div>
      <div className="bg-dark p-4 rounded w-full">
        <h3 className="text-2xl m-6">
          ⚠️ Sorry, something broke and requires rebuilding
        </h3>
      </div>
    </section>
  );
};

export default ConstructionSite;
