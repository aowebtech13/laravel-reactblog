import { Head, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Field, FieldLabel, FieldSet, FieldGroup } from '@/components/ui/field';
import { useForm } from '@inertiajs/react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';


export default function Index () {
    const {data, setData, post, processing, errors } =useForm({
        name: '',
        price: '',
        description: '',

    });
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('products.store'));
    };







    return (
        <>
            <Head title="Create New Products" />
        <div className="w-8/12 p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Display errors*/}
                {Object.keys(errors).length > 0 &&(
                   <Alert>
 <AlertCircle />
  <AlertTitle>Errors!</AlertTitle>
  <AlertDescription>
    <ul>
        {Object.entries(errors).map(([key,message]) =>(
            <li key={key}>{message as string}

            </li>
        ))}
    </ul>
    
  </AlertDescription>
  
</Alert> 
                )}

              <FieldSet className="w-full">
                  <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="product-name">Name</FieldLabel>
                        <Input id="product-name" type="text" value={data.name} onChange={(e) =>setData('name', e.target.value)}  placeholder="Enter Product Name" className="w-full" />
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="product-price">Price</FieldLabel>
                        <Input id="product-price" value={data.price} onChange={(e) =>setData('price', e.target.value) } type="number" placeholder="Enter Price" className="w-full" />
                    </Field>
                  </FieldGroup>
              </FieldSet>
                 <div>
                    <Label htmlFor="product-description">Description </Label>
                   <Textarea id="product-description" value={data.description} onChange={(e) => setData('description', e.target.value) }  placeholder="Enter Description"/>
                </div>
                <Button type="submit"> Add New Product</Button>
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
