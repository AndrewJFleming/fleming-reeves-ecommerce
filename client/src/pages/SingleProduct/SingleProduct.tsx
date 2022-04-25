import { FC } from "react";
import { useParams } from 'react-router-dom';

interface Props {

}

export const SingleProduct: FC<Props> = () => {

    const { productId } = useParams();

return (
<h1>{productId}</h1>
);
};