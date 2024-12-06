import Image from 'next/image';
import Link from 'next/link';

// 导航栏组件
function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">我的网站</span>
        </Link>
        
        {/* 移动端菜单按钮 */}
        <button 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">打开主菜单</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        {/* 导航菜单 */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                小工具
              </Link>
            </li>
            <li>
              <Link href="/tools" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                实用工具
              </Link>
            </li>
            <li>
              <Link href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                关于
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default function Home() {
  // 程序列表数据
  const programs = [
    {
      name: "复制禁用克星",
      // 更新为实际的文件路径
      icon: "/复制禁用克星/复制禁用克星.ico",
      description: "这是一个能够绕过浏览器复制限制的小工具。当你遇到无法复制的网页内容时,只需要：",
      steps: [
        "选中想要复制的文本",
        "按下快捷键 CTRL + ALT + C",
        "文本就会被成功复制到剪贴板"
      ],
      tip: "适用于各种禁止复制的网站,让你轻松复制需要的内容。",
      fileName: "/复制禁用克星/复制禁用克星.exe" // 更新为实际的文件名
    },
    // 后续可以在这里添加更多程序...
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 pt-24">
        <main className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">小工具</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 mb-4 relative">
                    <Image
                      src={program.icon}
                      alt={`${program.name} 图标`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h2 className="text-xl font-bold text-center">{program.name}</h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {program.description}
                </p>
                
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-2">
                  {program.steps.map((step, i) => (
                    <li key={i}>
                      {step.includes("CTRL + ALT + C") ? (
                        <>
                          按下快捷键 <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">CTRL + ALT + C</kbd>
                        </>
                      ) : step}
                    </li>
                  ))}
                </ul>
                
                <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg mb-6">
                  <h3 className="font-bold mb-2">使用提示</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {program.tip}
                  </p>
                </div>

                <a
                  href={program.fileName}
                  download
                  className="inline-block w-full text-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  下载程序
                </a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
