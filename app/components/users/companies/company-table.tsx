// 'use client'
// import * as React from "react";
// import {
//     ColumnDef,
//     ColumnFiltersState,
//     SortingState,
//     VisibilityState,
//     flexRender,
//     getCoreRowModel,
//     getFilteredRowModel,
//     getPaginationRowModel,
//     getSortedRowModel,
//     useReactTable,
// } from "@tanstack/react-table";
// import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//     DropdownMenu,
//     DropdownMenuCheckboxItem,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuSeparator,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Input } from "@/components/ui/input";
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
// } from "@/components/ui/table";

// export type Company = {
//     companyName: string;
//     industry: string;
//     companyPhone: string;
//     companyEmail: string;
//     country: string;
//     state: string;
//     city: string;
//     street: string;
//     postalCode: string;
//     geolocation: string;
//     logoImage?: string; // Optional field
// };

// export const columns: ColumnDef<Company>[] = [
//     {
//         accessorKey: "companyName",
//         header: ({ column }) => (
//             <Button
//                 variant="ghost"
//                 onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//             >
//                 Company Name
//                 <ArrowUpDown className="ml-2 h-4 w-4" />
//             </Button>
//         ),
//         cell: ({ row }) => <div>{row.getValue("companyName")}</div>,
//     },
//     {
//         accessorKey: "industry",
//         header: "Industry",
//         cell: ({ row }) => <div>{row.getValue("industry")}</div>,
//     },
//     {
//         accessorKey: "companyPhone",
//         header: "Company Phone",
//         cell: ({ row }) => <div>{row.getValue("companyPhone")}</div>,
//     },
//     {
//         accessorKey: "companyEmail",
//         header: ({ column }) => (
//             <Button
//                 variant="ghost"
//                 onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//             >
//                 Company Email
//                 <ArrowUpDown className="ml-2 h-4 w-4" />
//             </Button>
//         ),
//         cell: ({ row }) => <div className="lowercase">{row.getValue("companyEmail")}</div>,
//     },
//     {
//         accessorKey: "country",
//         header: "Country",
//         cell: ({ row }) => <div>{row.getValue("country")}</div>,
//     },
//     {
//         accessorKey: "state",
//         header: "State",
//         cell: ({ row }) => <div>{row.getValue("state")}</div>,
//     },
//     {
//         accessorKey: "city",
//         header: "City",
//         cell: ({ row }) => <div>{row.getValue("city")}</div>,
//     },
//     {
//         accessorKey: "street",
//         header: "Street",
//         cell: ({ row }) => <div>{row.getValue("street")}</div>,
//     },
//     {
//         accessorKey: "postalCode",
//         header: "Postal Code",
//         cell: ({ row }) => <div>{row.getValue("postalCode")}</div>,
//     },
//     {
//         accessorKey: "geolocation",
//         header: "Geolocation",
//         cell: ({ row }) => <div>{row.getValue("geolocation")}</div>,
//     },
//     {
//         accessorKey: "logoImage",
//         header: "Logo",
//         cell: ({ row }) => (
//             <img src={row.getValue("logoImage")} alt="Logo" className="h-10 w-10" />
//         ),
//     },
// ];

// export function DataTable() {
//     const [data, setData] = React.useState<Company[]>([]);
//     const [sorting, setSorting] = React.useState<SortingState>([]);
//     const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
//     const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
//     const [rowSelection, setRowSelection] = React.useState({});

//     React.useEffect(() => {
//         fetch("http://localhost:8000/api/v1/company/getCompaniesInfo")
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log("Fetched data:", data); // Log the fetched data

//                 // Transform the fetched data to match the expected Company structure
//                 const transformedData = data.data.map((item: any) => ({
//                     companyName: item.companyName,
//                     industry: item.industry,
//                     companyPhone: item.companyPhone,
//                     companyEmail: item.companyEmail,
//                     country: item.geolocation[0],
//                     state: item.geolocation[1],
//                     city: item.city, // Assuming this data is not available in the fetched data
//                     street: item.street, // Assuming this data is not available in the fetched data
//                     postalCode: item.postalCode, // Assuming this data is not available in the fetched data
//                     geolocation: `${item.geolocation[0]}, ${item.geolocation[1]}`,
//                     logoImage: "", // Assuming this data is not available in the fetched data
//                 }));

//                 setData(transformedData);
//             });
//     }, []);

//     const table = useReactTable({
//         data,
//         columns,
//         onSortingChange: setSorting,
//         onColumnFiltersChange: setColumnFilters,
//         getCoreRowModel: getCoreRowModel(),
//         getPaginationRowModel: getPaginationRowModel(),
//         getSortedRowModel: getSortedRowModel(),
//         getFilteredRowModel: getFilteredRowModel(),
//         onColumnVisibilityChange: setColumnVisibility,
//         onRowSelectionChange: setRowSelection,
//         state: {
//             sorting,
//             columnFilters,
//             columnVisibility,
//             rowSelection,
//         },
//     });

//     console.log("Table data:", table.getRowModel().rows); // Log table row data

//     return (
//         <div className="w-full">
//             <div className="flex items-center py-4">
//                 <Input
//                     placeholder="Filter emails..."
//                     value={(table.getColumn("companyEmail")?.getFilterValue() as string) ?? ""}
//                     onChange={(event) => table.getColumn("companyEmail")?.setFilterValue(event.target.value)}
//                     className="max-w-sm"
//                 />
//                 <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                         <Button variant="outline" className="ml-auto">
//                             Columns <ChevronDown className="ml-2 h-4 w-4" />
//                         </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent align="end">
//                         {table.getAllColumns().filter((column) => column.getCanHide()).map((column) => (
//                             <DropdownMenuCheckboxItem
//                                 key={column.id}
//                                 className="capitalize"
//                                 checked={column.getIsVisible()}
//                                 onCheckedChange={(value) => column.toggleVisibility(!!value)}
//                             >
//                                 {column.id}
//                             </DropdownMenuCheckboxItem>
//                         ))}
//                     </DropdownMenuContent>
//                 </DropdownMenu>
//             </div>
//             <div className="rounded-md border">
//                 <Table>
//                     <TableHeader>
//                         {table.getHeaderGroups().map((headerGroup) => (
//                             <TableRow key={headerGroup.id}>
//                                 {headerGroup.headers.map((header) => (
//                                     <TableHead key={header.id}>
//                                         {header.isPlaceholder
//                                             ? null
//                                             : flexRender(header.column.columnDef.header, header.getContext())}
//                                     </TableHead>
//                                 ))}
//                             </TableRow>
//                         ))}
//                     </TableHeader>
//                     <TableBody>
//                         {table.getRowModel().rows?.length ? (
//                             table.getRowModel().rows.map((row) => (
//                                 <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
//                                     {row.getVisibleCells().map((cell) => (
//                                         <TableCell key={cell.id}>
//                                             {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                                         </TableCell>
//                                     ))}
//                                 </TableRow>
//                             ))
//                         ) : (
//                             <TableRow>
//                                 <TableCell colSpan={columns.length} className="h-24 text-center">
//                                     No results.
//                                 </TableCell>
//                             </TableRow>
//                         )}
//                     </TableBody>
//                 </Table>
//             </div>
//             <div className="flex items-center justify-end space-x-2 py-4">
//                 <div className="flex-1 text-sm text-muted-foreground">
//                     {table.getFilteredSelectedRowModel().rows.length} of{" "}
//                     {table.getFilteredRowModel().rows.length} row(s) selected.
//                 </div>
//                 <div className="space-x-2">
//                     <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => table.previousPage()}
//                         disabled={!table.getCanPreviousPage()}
//                     >
//                         Previous
//                     </Button>
//                     <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => table.nextPage()}
//                         disabled={!table.getCanNextPage()}
//                     >
//                         Next
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }


'use client'
import * as React from "react";
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export type Company = {
    companyName: string;
    industry: string;
    companyPhone: string;
    companyEmail: string;
    country: string;
    state: string;
    city: string;
    street: string;
    postalCode: string;
    geolocation: string;
    logoImage?: string; // Optional field
};

export const columns: ColumnDef<Company>[] = [
    {
        accessorKey: "companyName",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Company Name
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => <div>{row.getValue("companyName")}</div>,
    },
    {
        accessorKey: "industry",
        header: "Industry",
        cell: ({ row }) => <div>{row.getValue("industry")}</div>,
    },
    {
        accessorKey: "companyPhone",
        header: "Company Phone",
        cell: ({ row }) => <div>{row.getValue("companyPhone")}</div>,
    },
    {
        accessorKey: "companyEmail",
        header: ({ column }) => (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Company Email
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        ),
        cell: ({ row }) => <div className="lowercase">{row.getValue("companyEmail")}</div>,
    },
    {
        accessorKey: "country",
        header: "Country",
        cell: ({ row }) => <div>{row.getValue("country")}</div>,
    },
    {
        accessorKey: "state",
        header: "State",
        cell: ({ row }) => <div>{row.getValue("state")}</div>,
    },
    {
        accessorKey: "city",
        header: "City",
        cell: ({ row }) => <div>{row.getValue("city")}</div>,
    },
    {
        accessorKey: "street",
        header: "Street",
        cell: ({ row }) => <div>{row.getValue("street")}</div>,
    },
    {
        accessorKey: "postalCode",
        header: "Postal Code",
        cell: ({ row }) => <div>{row.getValue("postalCode")}</div>,
    },
    {
        accessorKey: "geolocation",
        header: "Geolocation",
        cell: ({ row }) => {
            const geolocation = row.getValue("geolocation").split(", ");
            const lat = geolocation[0];
            const lng = geolocation[1];
            const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
            return (
                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                    View on Map
                </a>
            );
        },
    },
    {
        accessorKey: "logoImage",
        header: "Logo",
        cell: ({ row }) => (
            <img src={row.getValue("logoImage")} alt="Logo" className="h-10 w-10" />
        ),
    },
];

export function DataTable() {
    const [data, setData] = React.useState<Company[]>([]);
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = React.useState({});

    React.useEffect(() => {
        fetch("http://localhost:8000/api/v1/company/getCompaniesInfo")
            .then((response) => response.json())
            .then((data) => {
                console.log("Fetched data:", data); // Log the fetched data

                // Transform the fetched data to match the expected Company structure
                const transformedData = data.data.map((item: any) => ({
                    companyName: item.companyName,
                    industry: item.industry,
                    companyPhone: item.companyPhone,
                    companyEmail: item.companyEmail,
                    country: item.country,
                    state: item.state,
                    city: item.city, // Assuming this data is not available in the fetched data
                    street: item.street, // Assuming this data is not available in the fetched data
                    postalCode: item.postalCode, // Assuming this data is not available in the fetched data
                    geolocation: `${item.geolocation[1]}, ${item.geolocation[0]}`,
                    logoImage: "", // Assuming this data is not available in the fetched data
                }));

                setData(transformedData);
            });
    }, []);

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    console.log("Table data:", table.getRowModel().rows); // Log table row data

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter emails..."
                    value={(table.getColumn("companyEmail")?.getFilterValue() as string) ?? ""}
                    onChange={(event) => table.getColumn("companyEmail")?.setFilterValue(event.target.value)}
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table.getAllColumns().filter((column) => column.getCanHide()).map((column) => (
                            <DropdownMenuCheckboxItem
                                key={column.id}
                                className="capitalize"
                                checked={column.getIsVisible()}
                                onCheckedChange={(value) => column.toggleVisibility(!!value)}
                            >
                                {column.id}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}

