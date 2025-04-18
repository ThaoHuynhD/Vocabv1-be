
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
