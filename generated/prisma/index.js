
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Vocab_anto_tableScalarFieldEnum = {
  word_id: 'word_id',
  word_antonyms: 'word_antonyms'
};

exports.Prisma.Vocab_mean_tableScalarFieldEnum = {
  mean_id: 'mean_id',
  word_id: 'word_id',
  word_meaning: 'word_meaning',
  word_example: 'word_example',
  word_image: 'word_image'
};

exports.Prisma.Vocab_rela_tableScalarFieldEnum = {
  word_id: 'word_id',
  word_related_name: 'word_related_name'
};

exports.Prisma.Vocab_syn_tableScalarFieldEnum = {
  word_id: 'word_id',
  word_synonyms: 'word_synonyms'
};

exports.Prisma.Vocab_tableScalarFieldEnum = {
  word_id: 'word_id',
  word_name: 'word_name',
  word_type: 'word_type',
  word_ipa: 'word_ipa',
  word_voice: 'word_voice',
  word_topic: 'word_topic'
};

exports.Prisma.Vocab_topic_tableScalarFieldEnum = {
  topic_id: 'topic_id',
  topic_name: 'topic_name'
};

exports.Prisma.Vocab_type_tableScalarFieldEnum = {
  type_id: 'type_id',
  type_symble: 'type_symble',
  type_name: 'type_name'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.vocab_anto_tableOrderByRelevanceFieldEnum = {
  word_antonyms: 'word_antonyms'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.vocab_mean_tableOrderByRelevanceFieldEnum = {
  word_meaning: 'word_meaning',
  word_example: 'word_example',
  word_image: 'word_image'
};

exports.Prisma.vocab_rela_tableOrderByRelevanceFieldEnum = {
  word_related_name: 'word_related_name'
};

exports.Prisma.vocab_syn_tableOrderByRelevanceFieldEnum = {
  word_synonyms: 'word_synonyms'
};

exports.Prisma.vocab_tableOrderByRelevanceFieldEnum = {
  word_name: 'word_name',
  word_type: 'word_type',
  word_ipa: 'word_ipa',
  word_voice: 'word_voice',
  word_topic: 'word_topic'
};

exports.Prisma.vocab_topic_tableOrderByRelevanceFieldEnum = {
  topic_name: 'topic_name'
};

exports.Prisma.vocab_type_tableOrderByRelevanceFieldEnum = {
  type_symble: 'type_symble',
  type_name: 'type_name'
};


exports.Prisma.ModelName = {
  vocab_anto_table: 'vocab_anto_table',
  vocab_mean_table: 'vocab_mean_table',
  vocab_rela_table: 'vocab_rela_table',
  vocab_syn_table: 'vocab_syn_table',
  vocab_table: 'vocab_table',
  vocab_topic_table: 'vocab_topic_table',
  vocab_type_table: 'vocab_type_table'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "E:\\ThaoHuynh\\Documents_Personal\\Vocab_Project\\vocab-be-project\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "E:\\ThaoHuynh\\Documents_Personal\\Vocab_Project\\vocab-be-project\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.6.0",
  "engineVersion": "f676762280b54cd07c770017ed3711ddde35f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel vocab_anto_table {\n  word_id       Int         @id @default(autoincrement()) @db.UnsignedInt\n  word_antonyms String      @db.Text\n  vocab_table   vocab_table @relation(fields: [word_id], references: [word_id], onDelete: NoAction, onUpdate: NoAction, map: \"vocab_anto_table_word_id_foreign\")\n}\n\nmodel vocab_mean_table {\n  mean_id      Int     @id @default(autoincrement()) @db.UnsignedInt\n  word_id      Int\n  word_meaning String  @db.Text\n  word_example String? @db.Text\n  word_image   String? @db.VarChar(255)\n}\n\nmodel vocab_rela_table {\n  word_id           Int         @id @default(autoincrement()) @db.UnsignedInt\n  word_related_name String      @db.Text\n  vocab_table       vocab_table @relation(fields: [word_id], references: [word_id], onDelete: NoAction, onUpdate: NoAction, map: \"vocab_rela_table_word_id_foreign\")\n}\n\nmodel vocab_syn_table {\n  word_id       Int         @id @default(autoincrement()) @db.UnsignedInt\n  word_synonyms String      @db.Text\n  vocab_table   vocab_table @relation(fields: [word_id], references: [word_id], onDelete: NoAction, onUpdate: NoAction, map: \"vocab_syn_table_word_id_foreign\")\n}\n\nmodel vocab_table {\n  word_id          Int               @id @default(autoincrement()) @db.UnsignedInt\n  word_name        String            @db.VarChar(255)\n  word_type        String            @db.VarChar(255)\n  word_ipa         String?           @db.VarChar(255)\n  word_voice       String?           @db.Text\n  word_topic       String?           @db.Text\n  vocab_anto_table vocab_anto_table?\n  vocab_rela_table vocab_rela_table?\n  vocab_syn_table  vocab_syn_table?\n}\n\nmodel vocab_topic_table {\n  topic_id   Int    @id @default(autoincrement()) @db.UnsignedInt\n  topic_name String @db.VarChar(255)\n}\n\nmodel vocab_type_table {\n  type_id     Int    @id @default(autoincrement()) @db.UnsignedInt\n  type_symble String @db.VarChar(255)\n  type_name   String @db.VarChar(255)\n}\n",
  "inlineSchemaHash": "4d34b051ce04ca10ddae4cc5069d393e2e03fc7fc683ca45abbec7079c4b2f1b",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/prisma",
    "prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"vocab_anto_table\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"word_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word_antonyms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vocab_table\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vocab_table\",\"nativeType\":null,\"relationName\":\"vocab_anto_tableTovocab_table\",\"relationFromFields\":[\"word_id\"],\"relationToFields\":[\"word_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"vocab_mean_table\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"mean_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word_meaning\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word_example\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"vocab_rela_table\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"word_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word_related_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vocab_table\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vocab_table\",\"nativeType\":null,\"relationName\":\"vocab_rela_tableTovocab_table\",\"relationFromFields\":[\"word_id\"],\"relationToFields\":[\"word_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"vocab_syn_table\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"word_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word_synonyms\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vocab_table\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vocab_table\",\"nativeType\":null,\"relationName\":\"vocab_syn_tableTovocab_table\",\"relationFromFields\":[\"word_id\"],\"relationToFields\":[\"word_id\"],\"relationOnDelete\":\"NoAction\",\"relationOnUpdate\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"vocab_table\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"word_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word_type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word_ipa\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word_voice\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"word_topic\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vocab_anto_table\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vocab_anto_table\",\"nativeType\":null,\"relationName\":\"vocab_anto_tableTovocab_table\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vocab_rela_table\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vocab_rela_table\",\"nativeType\":null,\"relationName\":\"vocab_rela_tableTovocab_table\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"vocab_syn_table\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"vocab_syn_table\",\"nativeType\":null,\"relationName\":\"vocab_syn_tableTovocab_table\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"vocab_topic_table\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"topic_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"topic_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"vocab_type_table\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":[\"UnsignedInt\",[]],\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type_symble\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/prisma/schema.prisma")
