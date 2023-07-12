export default function Navigation({ children }: { children: any }) {
  return (
    <div className='bg-yellow-700 flex items-baseline justify-between p-4'>
      <div>
        <a href='/'>
          <span className='text-white  p-2 bg-orange-400'>Icon Here</span>
        </a>
      </div>
      <div className='hidden md:block'>{children}</div>
    </div>
  );
}
