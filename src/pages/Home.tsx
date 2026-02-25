
import { ResizablePanelView } from "../Components/common/resizable-panel";

export default function Home() {

    return (
        <div className="">
            <ResizablePanelView />
        </div>

        // <div className="flex flex-col space-y-20">
        //     <div className="flex justify-between items-center">
        //         <Text
        //             as="h1"
        //             variant="muted"
        //             className=" font-bold text-4xl text-muted-foreground"
        //         >
        //             Tasks
        //         </Text>
        //         <SwitchDemo isTableView={isTableView} onToggle={handleToggle} />
        //     </div>
        //     <div className="space-y-3">
        //         <div className="flex justify-between">
        //             <div className="relative flex items-center">
        //                 <Search className="absolute ml-1" size={18} color="gray" />
        //                 <Input
        //                     onChange={handleSearch}
        //                     value={search}
        //                     className="w-100 h-8 pl-7 bg-background"
        //                     type="text"
        //                     placeholder="Pesquise a tarefa pelo codigo ou nome..."
        //                 />
        //             </div>
        //             <div className="ml-5 text-muted-foreground">
        //                 <DatePickerWithRange
        //                     value={dateRange}
        //                     onChange={handleDateSearch}
        //                 />
        //             </div>
        //         </div>
        //         {isTableView ? (
        //             <div className="max-h-140 mb-16 overflow-y-auto pr-1">

        //                 {isLoading ? (
        //                     <SkeletonTable />

        //                 ) : (

        //                     <TableTask
        //                         tasks={paginatedData}
        //                     />
        //                 )}
        //             </div>
        //         ) : (
        //             <div className="max-h-140 mb-16 overflow-y-auto pr-1">
        //                 <AccordionTask tasks={paginatedData} />
        //             </div>
        //         )}
        //         <PaginationDemo
        //             currentPage={page}
        //             onPageChange={setPage}
        //             totalPages={totalPages}
        //         />
        //     </div>
        // </div>
    )
}