// import { gql } from "apollo-server-micro";

import { makeSchema } from "nexus";
import { join } from "path";
import * as types from "./types";

// export const typeDefs = gql`
//     type User {
//         id: String
//         createdAt: String
//         updatedAt: String
//         email: String
//         category: String
//         userName: String
//         notes: [String]
//     }

//     type Query {
//         users: [User]!
//     }
// `;

export const schema = makeSchema({
    types,
    outputs: {
        typegen: join(
            process.cwd(),
            "node_modules",
            "@types",
            "nexus-typegen",
            "index.d.ts"
        ),
        schema: join(process.cwd(), "graphql", "schema.graphql"),
    },
    contextType: {
        export: "Context",
        module: join(process.cwd(), "graphql", "context.ts"),
    },
});
