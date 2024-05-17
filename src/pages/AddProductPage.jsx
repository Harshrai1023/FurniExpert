import {
  Button,
  Card,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
export const AddProductPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-8 ">
        <div className="col-span-2 hidden md:block">
          <Typography>Details</Typography>
          <Typography>Title, short description, image...</Typography>
        </div>

        <Card className="m-4 col-span-6">
          <div className="flex flex-col m-5 gap-4">
            <Typography variant="h5">Details</Typography>
            <Input label="Product Name" />
            <Textarea label="Description" />
            <Typography>Images</Typography>
          </div>
        </Card>
        <div className="col-span-2 hidden md:block">
          <Typography>Properties</Typography>
          <Typography>Additional functions and attributes...</Typography>
        </div>
        <Card className="m-4 col-span-6">
          <div className="flex flex-col m-5 gap-4">
            <Typography variant="h5">Properties</Typography>
            <Input label="Quantity" />
            <Input label="Category" />
            <Textarea label="Specification" />
            <Typography>Sale (Y/N)</Typography>
          </div>
        </Card>
        <div className="col-span-2 hidden md:block">
          <Typography>Pricing</Typography>
          <Typography>Price related inputs</Typography>
        </div>
        <Card className="m-4 col-span-6">
          <div className="flex flex-col m-5 gap-4">
            <Typography variant="h5">Pricing</Typography>
            <Input label="Regular Price" />
            <Input label="Sale Price" />
            <Input label="Tax(%)" />
          </div>
        </Card>
      </div>
      <div className="flex justify-end p-5">
        <Button>Create Product</Button>
      </div>
    </div>
  );
};
