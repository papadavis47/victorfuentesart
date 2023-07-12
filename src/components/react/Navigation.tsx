export default function Navigation({ children }: { children: any }) {
  return (
    <div className='bg-gradient-to-l from-red-600 to-slate-500 flex items-baseline justify-between p-4'>
      <div>
        <a href='/'>
          <span className='text-white  p-2 bg-slate-800 rounded'>Icon Here</span>
        </a>
      </div>
      <div className='hidden md:block'>{children}</div>
    </div>
  );
}
