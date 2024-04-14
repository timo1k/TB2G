type Props = {
  tabsArray: string[]
  activeTab: string
  setActiveTab: React.Dispatch<React.SetStateAction<string>>
}

export default function Tabs({ tabsArray, activeTab, setActiveTab }: Props) {
  return (
    <div
      style={{
        gridTemplateColumns: Array(tabsArray.length)
          .fill('x')
          .map((tab: any) => '1fr')
          .join(' '),
      }}
      className="grid w-full rounded-base"
    >
      {tabsArray.map((tab, index) => {
        const bg = activeTab === tab ? 'bg-mainAccent' : 'bg-main'

        return (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer border-2 border-black px-6 py-3
            text-white text-center font-bold transition-colors
            first:rounded-ss-base last:rounded-se-base ${bg}`}
          >
            {tab}
          </button>
        )
      })}
    </div>
  )
}
