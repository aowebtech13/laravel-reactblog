import { Head, Link } from '@inertiajs/react';
import Dashboard from '../dashboard';
import { Button } from '@/components/ui/button';
import { create } from '@/routes/products';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';



export default function Index () {
    return (
        <>
            <Head title="Create New Products" />
        <div className="w-8/12 p-4">
            <form>
                <div>
                   <Label htmlFor="product name"> Name </Label>
                   <input type="text" placeholder="EnterProduct Name"> 
                   </input>

                </div>
                <div>
                    <Label htmlFor="Product Price">Price </Label>
                    <input type="number" placeholder="Enter product price"></input>

                </div>
                 <div>
                    <Label htmlFor="Product Description">Description </Label>
                    <input type="text" placeholder="Enter product Description"></input>

                </div>


            </form>
        </div>
        </>
    );
}

Index.layout = {
    breadcrumbs: [
        {
            title: 'Create New Products',
            href: '/products/create',
        },
    ],
};
