'use client';

import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

// Załaduj SwaggerUI dynamicznie, aby uniknąć problemów z prerenderowaniem
const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

export default function ApiDocs() {
    return <SwaggerUI url="/swagger.json" />;
}
