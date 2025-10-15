const AdminKpiSkeleton = () => {
  return (
    <div className="animate-pulse rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-2xl bg-slate-100" />
        <div className="space-y-2">
          <div className="h-3 w-24 rounded-full bg-slate-100" />
          <div className="h-6 w-32 rounded-full bg-slate-100" />
        </div>
      </div>
      <div className="mt-5 h-4 w-40 rounded-full bg-slate-100" />
    </div>
  )
}

export default AdminKpiSkeleton
