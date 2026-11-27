import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface PageProps {
    flash?: {
        success?: string;
        errors?: Record<string, string>;

    };
    products: product[]
}

interface product {
    id: number,
    name: string,
    price: number,
    description: string,
}

export default function Index() {
    const { products, flash } = usePage().props as PageProps;
    return (
        <>
            <Head title="Products" />
            <div className="m-4">
                <Link href="/products/create"><Button>Create a Product</Button></Link>
            </div>
            <div className='m-4'>
                {flash?.success && (
                    <Alert className="bg-green-50 border-green-200">
                        <AlertCircle className="text-green-500" />
                        <AlertTitle>Success!</AlertTitle>
                        <AlertDescription>{flash.success}</AlertDescription>
                    </Alert>
                )}
                {flash?.errors && (
                    <Alert>
                        <AlertCircle />
                        <AlertTitle>Errors!</AlertTitle>
                        <AlertDescription>
                            <ul>
                                {Object.entries(flash.errors).map(([key, message]) => (
                                    <li key={key}>{message as string}</li>
                                ))}
                            </ul>
                        </AlertDescription>
                    </Alert>
                )}
            </div>
            {products.length > 0 && (
                <Table>
                    <TableCaption>A list of your products.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Description</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell className="font-medium">{product.name}</TableCell>
                                <TableCell>${product.price}</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Products',
            href: '/products',
        },
    ],
};
