
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model vocab_anto_table
 * 
 */
export type vocab_anto_table = $Result.DefaultSelection<Prisma.$vocab_anto_tablePayload>
/**
 * Model vocab_mean_table
 * 
 */
export type vocab_mean_table = $Result.DefaultSelection<Prisma.$vocab_mean_tablePayload>
/**
 * Model vocab_rela_table
 * 
 */
export type vocab_rela_table = $Result.DefaultSelection<Prisma.$vocab_rela_tablePayload>
/**
 * Model vocab_syn_table
 * 
 */
export type vocab_syn_table = $Result.DefaultSelection<Prisma.$vocab_syn_tablePayload>
/**
 * Model vocab_table
 * 
 */
export type vocab_table = $Result.DefaultSelection<Prisma.$vocab_tablePayload>
/**
 * Model vocab_topic_table
 * 
 */
export type vocab_topic_table = $Result.DefaultSelection<Prisma.$vocab_topic_tablePayload>
/**
 * Model vocab_type_table
 * 
 */
export type vocab_type_table = $Result.DefaultSelection<Prisma.$vocab_type_tablePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Vocab_anto_tables
 * const vocab_anto_tables = await prisma.vocab_anto_table.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Vocab_anto_tables
   * const vocab_anto_tables = await prisma.vocab_anto_table.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.vocab_anto_table`: Exposes CRUD operations for the **vocab_anto_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vocab_anto_tables
    * const vocab_anto_tables = await prisma.vocab_anto_table.findMany()
    * ```
    */
  get vocab_anto_table(): Prisma.vocab_anto_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vocab_mean_table`: Exposes CRUD operations for the **vocab_mean_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vocab_mean_tables
    * const vocab_mean_tables = await prisma.vocab_mean_table.findMany()
    * ```
    */
  get vocab_mean_table(): Prisma.vocab_mean_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vocab_rela_table`: Exposes CRUD operations for the **vocab_rela_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vocab_rela_tables
    * const vocab_rela_tables = await prisma.vocab_rela_table.findMany()
    * ```
    */
  get vocab_rela_table(): Prisma.vocab_rela_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vocab_syn_table`: Exposes CRUD operations for the **vocab_syn_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vocab_syn_tables
    * const vocab_syn_tables = await prisma.vocab_syn_table.findMany()
    * ```
    */
  get vocab_syn_table(): Prisma.vocab_syn_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vocab_table`: Exposes CRUD operations for the **vocab_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vocab_tables
    * const vocab_tables = await prisma.vocab_table.findMany()
    * ```
    */
  get vocab_table(): Prisma.vocab_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vocab_topic_table`: Exposes CRUD operations for the **vocab_topic_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vocab_topic_tables
    * const vocab_topic_tables = await prisma.vocab_topic_table.findMany()
    * ```
    */
  get vocab_topic_table(): Prisma.vocab_topic_tableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vocab_type_table`: Exposes CRUD operations for the **vocab_type_table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vocab_type_tables
    * const vocab_type_tables = await prisma.vocab_type_table.findMany()
    * ```
    */
  get vocab_type_table(): Prisma.vocab_type_tableDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    vocab_anto_table: 'vocab_anto_table',
    vocab_mean_table: 'vocab_mean_table',
    vocab_rela_table: 'vocab_rela_table',
    vocab_syn_table: 'vocab_syn_table',
    vocab_table: 'vocab_table',
    vocab_topic_table: 'vocab_topic_table',
    vocab_type_table: 'vocab_type_table'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "vocab_anto_table" | "vocab_mean_table" | "vocab_rela_table" | "vocab_syn_table" | "vocab_table" | "vocab_topic_table" | "vocab_type_table"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      vocab_anto_table: {
        payload: Prisma.$vocab_anto_tablePayload<ExtArgs>
        fields: Prisma.vocab_anto_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vocab_anto_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_anto_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vocab_anto_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_anto_tablePayload>
          }
          findFirst: {
            args: Prisma.vocab_anto_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_anto_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vocab_anto_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_anto_tablePayload>
          }
          findMany: {
            args: Prisma.vocab_anto_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_anto_tablePayload>[]
          }
          create: {
            args: Prisma.vocab_anto_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_anto_tablePayload>
          }
          createMany: {
            args: Prisma.vocab_anto_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vocab_anto_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_anto_tablePayload>
          }
          update: {
            args: Prisma.vocab_anto_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_anto_tablePayload>
          }
          deleteMany: {
            args: Prisma.vocab_anto_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vocab_anto_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vocab_anto_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_anto_tablePayload>
          }
          aggregate: {
            args: Prisma.Vocab_anto_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVocab_anto_table>
          }
          groupBy: {
            args: Prisma.vocab_anto_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vocab_anto_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.vocab_anto_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Vocab_anto_tableCountAggregateOutputType> | number
          }
        }
      }
      vocab_mean_table: {
        payload: Prisma.$vocab_mean_tablePayload<ExtArgs>
        fields: Prisma.vocab_mean_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vocab_mean_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_mean_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vocab_mean_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_mean_tablePayload>
          }
          findFirst: {
            args: Prisma.vocab_mean_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_mean_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vocab_mean_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_mean_tablePayload>
          }
          findMany: {
            args: Prisma.vocab_mean_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_mean_tablePayload>[]
          }
          create: {
            args: Prisma.vocab_mean_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_mean_tablePayload>
          }
          createMany: {
            args: Prisma.vocab_mean_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vocab_mean_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_mean_tablePayload>
          }
          update: {
            args: Prisma.vocab_mean_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_mean_tablePayload>
          }
          deleteMany: {
            args: Prisma.vocab_mean_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vocab_mean_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vocab_mean_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_mean_tablePayload>
          }
          aggregate: {
            args: Prisma.Vocab_mean_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVocab_mean_table>
          }
          groupBy: {
            args: Prisma.vocab_mean_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vocab_mean_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.vocab_mean_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Vocab_mean_tableCountAggregateOutputType> | number
          }
        }
      }
      vocab_rela_table: {
        payload: Prisma.$vocab_rela_tablePayload<ExtArgs>
        fields: Prisma.vocab_rela_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vocab_rela_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_rela_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vocab_rela_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_rela_tablePayload>
          }
          findFirst: {
            args: Prisma.vocab_rela_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_rela_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vocab_rela_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_rela_tablePayload>
          }
          findMany: {
            args: Prisma.vocab_rela_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_rela_tablePayload>[]
          }
          create: {
            args: Prisma.vocab_rela_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_rela_tablePayload>
          }
          createMany: {
            args: Prisma.vocab_rela_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vocab_rela_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_rela_tablePayload>
          }
          update: {
            args: Prisma.vocab_rela_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_rela_tablePayload>
          }
          deleteMany: {
            args: Prisma.vocab_rela_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vocab_rela_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vocab_rela_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_rela_tablePayload>
          }
          aggregate: {
            args: Prisma.Vocab_rela_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVocab_rela_table>
          }
          groupBy: {
            args: Prisma.vocab_rela_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vocab_rela_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.vocab_rela_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Vocab_rela_tableCountAggregateOutputType> | number
          }
        }
      }
      vocab_syn_table: {
        payload: Prisma.$vocab_syn_tablePayload<ExtArgs>
        fields: Prisma.vocab_syn_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vocab_syn_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_syn_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vocab_syn_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_syn_tablePayload>
          }
          findFirst: {
            args: Prisma.vocab_syn_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_syn_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vocab_syn_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_syn_tablePayload>
          }
          findMany: {
            args: Prisma.vocab_syn_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_syn_tablePayload>[]
          }
          create: {
            args: Prisma.vocab_syn_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_syn_tablePayload>
          }
          createMany: {
            args: Prisma.vocab_syn_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vocab_syn_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_syn_tablePayload>
          }
          update: {
            args: Prisma.vocab_syn_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_syn_tablePayload>
          }
          deleteMany: {
            args: Prisma.vocab_syn_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vocab_syn_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vocab_syn_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_syn_tablePayload>
          }
          aggregate: {
            args: Prisma.Vocab_syn_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVocab_syn_table>
          }
          groupBy: {
            args: Prisma.vocab_syn_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vocab_syn_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.vocab_syn_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Vocab_syn_tableCountAggregateOutputType> | number
          }
        }
      }
      vocab_table: {
        payload: Prisma.$vocab_tablePayload<ExtArgs>
        fields: Prisma.vocab_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vocab_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vocab_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_tablePayload>
          }
          findFirst: {
            args: Prisma.vocab_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vocab_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_tablePayload>
          }
          findMany: {
            args: Prisma.vocab_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_tablePayload>[]
          }
          create: {
            args: Prisma.vocab_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_tablePayload>
          }
          createMany: {
            args: Prisma.vocab_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vocab_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_tablePayload>
          }
          update: {
            args: Prisma.vocab_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_tablePayload>
          }
          deleteMany: {
            args: Prisma.vocab_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vocab_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vocab_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_tablePayload>
          }
          aggregate: {
            args: Prisma.Vocab_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVocab_table>
          }
          groupBy: {
            args: Prisma.vocab_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vocab_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.vocab_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Vocab_tableCountAggregateOutputType> | number
          }
        }
      }
      vocab_topic_table: {
        payload: Prisma.$vocab_topic_tablePayload<ExtArgs>
        fields: Prisma.vocab_topic_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vocab_topic_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_topic_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vocab_topic_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_topic_tablePayload>
          }
          findFirst: {
            args: Prisma.vocab_topic_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_topic_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vocab_topic_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_topic_tablePayload>
          }
          findMany: {
            args: Prisma.vocab_topic_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_topic_tablePayload>[]
          }
          create: {
            args: Prisma.vocab_topic_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_topic_tablePayload>
          }
          createMany: {
            args: Prisma.vocab_topic_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vocab_topic_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_topic_tablePayload>
          }
          update: {
            args: Prisma.vocab_topic_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_topic_tablePayload>
          }
          deleteMany: {
            args: Prisma.vocab_topic_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vocab_topic_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vocab_topic_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_topic_tablePayload>
          }
          aggregate: {
            args: Prisma.Vocab_topic_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVocab_topic_table>
          }
          groupBy: {
            args: Prisma.vocab_topic_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vocab_topic_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.vocab_topic_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Vocab_topic_tableCountAggregateOutputType> | number
          }
        }
      }
      vocab_type_table: {
        payload: Prisma.$vocab_type_tablePayload<ExtArgs>
        fields: Prisma.vocab_type_tableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.vocab_type_tableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_type_tablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.vocab_type_tableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_type_tablePayload>
          }
          findFirst: {
            args: Prisma.vocab_type_tableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_type_tablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.vocab_type_tableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_type_tablePayload>
          }
          findMany: {
            args: Prisma.vocab_type_tableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_type_tablePayload>[]
          }
          create: {
            args: Prisma.vocab_type_tableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_type_tablePayload>
          }
          createMany: {
            args: Prisma.vocab_type_tableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.vocab_type_tableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_type_tablePayload>
          }
          update: {
            args: Prisma.vocab_type_tableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_type_tablePayload>
          }
          deleteMany: {
            args: Prisma.vocab_type_tableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.vocab_type_tableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.vocab_type_tableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$vocab_type_tablePayload>
          }
          aggregate: {
            args: Prisma.Vocab_type_tableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVocab_type_table>
          }
          groupBy: {
            args: Prisma.vocab_type_tableGroupByArgs<ExtArgs>
            result: $Utils.Optional<Vocab_type_tableGroupByOutputType>[]
          }
          count: {
            args: Prisma.vocab_type_tableCountArgs<ExtArgs>
            result: $Utils.Optional<Vocab_type_tableCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    vocab_anto_table?: vocab_anto_tableOmit
    vocab_mean_table?: vocab_mean_tableOmit
    vocab_rela_table?: vocab_rela_tableOmit
    vocab_syn_table?: vocab_syn_tableOmit
    vocab_table?: vocab_tableOmit
    vocab_topic_table?: vocab_topic_tableOmit
    vocab_type_table?: vocab_type_tableOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Vocab_tableCountOutputType
   */

  export type Vocab_tableCountOutputType = {
    vocab_mean_table: number
  }

  export type Vocab_tableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocab_mean_table?: boolean | Vocab_tableCountOutputTypeCountVocab_mean_tableArgs
  }

  // Custom InputTypes
  /**
   * Vocab_tableCountOutputType without action
   */
  export type Vocab_tableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vocab_tableCountOutputType
     */
    select?: Vocab_tableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Vocab_tableCountOutputType without action
   */
  export type Vocab_tableCountOutputTypeCountVocab_mean_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vocab_mean_tableWhereInput
  }


  /**
   * Models
   */

  /**
   * Model vocab_anto_table
   */

  export type AggregateVocab_anto_table = {
    _count: Vocab_anto_tableCountAggregateOutputType | null
    _avg: Vocab_anto_tableAvgAggregateOutputType | null
    _sum: Vocab_anto_tableSumAggregateOutputType | null
    _min: Vocab_anto_tableMinAggregateOutputType | null
    _max: Vocab_anto_tableMaxAggregateOutputType | null
  }

  export type Vocab_anto_tableAvgAggregateOutputType = {
    word_id: number | null
  }

  export type Vocab_anto_tableSumAggregateOutputType = {
    word_id: number | null
  }

  export type Vocab_anto_tableMinAggregateOutputType = {
    word_id: number | null
    word_antonyms: string | null
  }

  export type Vocab_anto_tableMaxAggregateOutputType = {
    word_id: number | null
    word_antonyms: string | null
  }

  export type Vocab_anto_tableCountAggregateOutputType = {
    word_id: number
    word_antonyms: number
    _all: number
  }


  export type Vocab_anto_tableAvgAggregateInputType = {
    word_id?: true
  }

  export type Vocab_anto_tableSumAggregateInputType = {
    word_id?: true
  }

  export type Vocab_anto_tableMinAggregateInputType = {
    word_id?: true
    word_antonyms?: true
  }

  export type Vocab_anto_tableMaxAggregateInputType = {
    word_id?: true
    word_antonyms?: true
  }

  export type Vocab_anto_tableCountAggregateInputType = {
    word_id?: true
    word_antonyms?: true
    _all?: true
  }

  export type Vocab_anto_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocab_anto_table to aggregate.
     */
    where?: vocab_anto_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_anto_tables to fetch.
     */
    orderBy?: vocab_anto_tableOrderByWithRelationInput | vocab_anto_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vocab_anto_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_anto_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_anto_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vocab_anto_tables
    **/
    _count?: true | Vocab_anto_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vocab_anto_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vocab_anto_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vocab_anto_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vocab_anto_tableMaxAggregateInputType
  }

  export type GetVocab_anto_tableAggregateType<T extends Vocab_anto_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateVocab_anto_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocab_anto_table[P]>
      : GetScalarType<T[P], AggregateVocab_anto_table[P]>
  }




  export type vocab_anto_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vocab_anto_tableWhereInput
    orderBy?: vocab_anto_tableOrderByWithAggregationInput | vocab_anto_tableOrderByWithAggregationInput[]
    by: Vocab_anto_tableScalarFieldEnum[] | Vocab_anto_tableScalarFieldEnum
    having?: vocab_anto_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vocab_anto_tableCountAggregateInputType | true
    _avg?: Vocab_anto_tableAvgAggregateInputType
    _sum?: Vocab_anto_tableSumAggregateInputType
    _min?: Vocab_anto_tableMinAggregateInputType
    _max?: Vocab_anto_tableMaxAggregateInputType
  }

  export type Vocab_anto_tableGroupByOutputType = {
    word_id: number
    word_antonyms: string
    _count: Vocab_anto_tableCountAggregateOutputType | null
    _avg: Vocab_anto_tableAvgAggregateOutputType | null
    _sum: Vocab_anto_tableSumAggregateOutputType | null
    _min: Vocab_anto_tableMinAggregateOutputType | null
    _max: Vocab_anto_tableMaxAggregateOutputType | null
  }

  type GetVocab_anto_tableGroupByPayload<T extends vocab_anto_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vocab_anto_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vocab_anto_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vocab_anto_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Vocab_anto_tableGroupByOutputType[P]>
        }
      >
    >


  export type vocab_anto_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    word_id?: boolean
    word_antonyms?: boolean
    vocab_table?: boolean | vocab_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocab_anto_table"]>



  export type vocab_anto_tableSelectScalar = {
    word_id?: boolean
    word_antonyms?: boolean
  }

  export type vocab_anto_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"word_id" | "word_antonyms", ExtArgs["result"]["vocab_anto_table"]>
  export type vocab_anto_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocab_table?: boolean | vocab_tableDefaultArgs<ExtArgs>
  }

  export type $vocab_anto_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vocab_anto_table"
    objects: {
      vocab_table: Prisma.$vocab_tablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      word_id: number
      word_antonyms: string
    }, ExtArgs["result"]["vocab_anto_table"]>
    composites: {}
  }

  type vocab_anto_tableGetPayload<S extends boolean | null | undefined | vocab_anto_tableDefaultArgs> = $Result.GetResult<Prisma.$vocab_anto_tablePayload, S>

  type vocab_anto_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vocab_anto_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vocab_anto_tableCountAggregateInputType | true
    }

  export interface vocab_anto_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vocab_anto_table'], meta: { name: 'vocab_anto_table' } }
    /**
     * Find zero or one Vocab_anto_table that matches the filter.
     * @param {vocab_anto_tableFindUniqueArgs} args - Arguments to find a Vocab_anto_table
     * @example
     * // Get one Vocab_anto_table
     * const vocab_anto_table = await prisma.vocab_anto_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vocab_anto_tableFindUniqueArgs>(args: SelectSubset<T, vocab_anto_tableFindUniqueArgs<ExtArgs>>): Prisma__vocab_anto_tableClient<$Result.GetResult<Prisma.$vocab_anto_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vocab_anto_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vocab_anto_tableFindUniqueOrThrowArgs} args - Arguments to find a Vocab_anto_table
     * @example
     * // Get one Vocab_anto_table
     * const vocab_anto_table = await prisma.vocab_anto_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vocab_anto_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, vocab_anto_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vocab_anto_tableClient<$Result.GetResult<Prisma.$vocab_anto_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocab_anto_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_anto_tableFindFirstArgs} args - Arguments to find a Vocab_anto_table
     * @example
     * // Get one Vocab_anto_table
     * const vocab_anto_table = await prisma.vocab_anto_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vocab_anto_tableFindFirstArgs>(args?: SelectSubset<T, vocab_anto_tableFindFirstArgs<ExtArgs>>): Prisma__vocab_anto_tableClient<$Result.GetResult<Prisma.$vocab_anto_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocab_anto_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_anto_tableFindFirstOrThrowArgs} args - Arguments to find a Vocab_anto_table
     * @example
     * // Get one Vocab_anto_table
     * const vocab_anto_table = await prisma.vocab_anto_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vocab_anto_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, vocab_anto_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__vocab_anto_tableClient<$Result.GetResult<Prisma.$vocab_anto_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vocab_anto_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_anto_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vocab_anto_tables
     * const vocab_anto_tables = await prisma.vocab_anto_table.findMany()
     * 
     * // Get first 10 Vocab_anto_tables
     * const vocab_anto_tables = await prisma.vocab_anto_table.findMany({ take: 10 })
     * 
     * // Only select the `word_id`
     * const vocab_anto_tableWithWord_idOnly = await prisma.vocab_anto_table.findMany({ select: { word_id: true } })
     * 
     */
    findMany<T extends vocab_anto_tableFindManyArgs>(args?: SelectSubset<T, vocab_anto_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vocab_anto_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vocab_anto_table.
     * @param {vocab_anto_tableCreateArgs} args - Arguments to create a Vocab_anto_table.
     * @example
     * // Create one Vocab_anto_table
     * const Vocab_anto_table = await prisma.vocab_anto_table.create({
     *   data: {
     *     // ... data to create a Vocab_anto_table
     *   }
     * })
     * 
     */
    create<T extends vocab_anto_tableCreateArgs>(args: SelectSubset<T, vocab_anto_tableCreateArgs<ExtArgs>>): Prisma__vocab_anto_tableClient<$Result.GetResult<Prisma.$vocab_anto_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vocab_anto_tables.
     * @param {vocab_anto_tableCreateManyArgs} args - Arguments to create many Vocab_anto_tables.
     * @example
     * // Create many Vocab_anto_tables
     * const vocab_anto_table = await prisma.vocab_anto_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vocab_anto_tableCreateManyArgs>(args?: SelectSubset<T, vocab_anto_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vocab_anto_table.
     * @param {vocab_anto_tableDeleteArgs} args - Arguments to delete one Vocab_anto_table.
     * @example
     * // Delete one Vocab_anto_table
     * const Vocab_anto_table = await prisma.vocab_anto_table.delete({
     *   where: {
     *     // ... filter to delete one Vocab_anto_table
     *   }
     * })
     * 
     */
    delete<T extends vocab_anto_tableDeleteArgs>(args: SelectSubset<T, vocab_anto_tableDeleteArgs<ExtArgs>>): Prisma__vocab_anto_tableClient<$Result.GetResult<Prisma.$vocab_anto_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vocab_anto_table.
     * @param {vocab_anto_tableUpdateArgs} args - Arguments to update one Vocab_anto_table.
     * @example
     * // Update one Vocab_anto_table
     * const vocab_anto_table = await prisma.vocab_anto_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vocab_anto_tableUpdateArgs>(args: SelectSubset<T, vocab_anto_tableUpdateArgs<ExtArgs>>): Prisma__vocab_anto_tableClient<$Result.GetResult<Prisma.$vocab_anto_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vocab_anto_tables.
     * @param {vocab_anto_tableDeleteManyArgs} args - Arguments to filter Vocab_anto_tables to delete.
     * @example
     * // Delete a few Vocab_anto_tables
     * const { count } = await prisma.vocab_anto_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vocab_anto_tableDeleteManyArgs>(args?: SelectSubset<T, vocab_anto_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vocab_anto_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_anto_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vocab_anto_tables
     * const vocab_anto_table = await prisma.vocab_anto_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vocab_anto_tableUpdateManyArgs>(args: SelectSubset<T, vocab_anto_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vocab_anto_table.
     * @param {vocab_anto_tableUpsertArgs} args - Arguments to update or create a Vocab_anto_table.
     * @example
     * // Update or create a Vocab_anto_table
     * const vocab_anto_table = await prisma.vocab_anto_table.upsert({
     *   create: {
     *     // ... data to create a Vocab_anto_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vocab_anto_table we want to update
     *   }
     * })
     */
    upsert<T extends vocab_anto_tableUpsertArgs>(args: SelectSubset<T, vocab_anto_tableUpsertArgs<ExtArgs>>): Prisma__vocab_anto_tableClient<$Result.GetResult<Prisma.$vocab_anto_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vocab_anto_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_anto_tableCountArgs} args - Arguments to filter Vocab_anto_tables to count.
     * @example
     * // Count the number of Vocab_anto_tables
     * const count = await prisma.vocab_anto_table.count({
     *   where: {
     *     // ... the filter for the Vocab_anto_tables we want to count
     *   }
     * })
    **/
    count<T extends vocab_anto_tableCountArgs>(
      args?: Subset<T, vocab_anto_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vocab_anto_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vocab_anto_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vocab_anto_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Vocab_anto_tableAggregateArgs>(args: Subset<T, Vocab_anto_tableAggregateArgs>): Prisma.PrismaPromise<GetVocab_anto_tableAggregateType<T>>

    /**
     * Group by Vocab_anto_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_anto_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vocab_anto_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vocab_anto_tableGroupByArgs['orderBy'] }
        : { orderBy?: vocab_anto_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vocab_anto_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocab_anto_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vocab_anto_table model
   */
  readonly fields: vocab_anto_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vocab_anto_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vocab_anto_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vocab_table<T extends vocab_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vocab_tableDefaultArgs<ExtArgs>>): Prisma__vocab_tableClient<$Result.GetResult<Prisma.$vocab_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vocab_anto_table model
   */
  interface vocab_anto_tableFieldRefs {
    readonly word_id: FieldRef<"vocab_anto_table", 'Int'>
    readonly word_antonyms: FieldRef<"vocab_anto_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vocab_anto_table findUnique
   */
  export type vocab_anto_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_anto_table
     */
    select?: vocab_anto_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_anto_table
     */
    omit?: vocab_anto_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_anto_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_anto_table to fetch.
     */
    where: vocab_anto_tableWhereUniqueInput
  }

  /**
   * vocab_anto_table findUniqueOrThrow
   */
  export type vocab_anto_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_anto_table
     */
    select?: vocab_anto_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_anto_table
     */
    omit?: vocab_anto_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_anto_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_anto_table to fetch.
     */
    where: vocab_anto_tableWhereUniqueInput
  }

  /**
   * vocab_anto_table findFirst
   */
  export type vocab_anto_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_anto_table
     */
    select?: vocab_anto_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_anto_table
     */
    omit?: vocab_anto_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_anto_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_anto_table to fetch.
     */
    where?: vocab_anto_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_anto_tables to fetch.
     */
    orderBy?: vocab_anto_tableOrderByWithRelationInput | vocab_anto_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocab_anto_tables.
     */
    cursor?: vocab_anto_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_anto_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_anto_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocab_anto_tables.
     */
    distinct?: Vocab_anto_tableScalarFieldEnum | Vocab_anto_tableScalarFieldEnum[]
  }

  /**
   * vocab_anto_table findFirstOrThrow
   */
  export type vocab_anto_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_anto_table
     */
    select?: vocab_anto_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_anto_table
     */
    omit?: vocab_anto_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_anto_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_anto_table to fetch.
     */
    where?: vocab_anto_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_anto_tables to fetch.
     */
    orderBy?: vocab_anto_tableOrderByWithRelationInput | vocab_anto_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocab_anto_tables.
     */
    cursor?: vocab_anto_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_anto_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_anto_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocab_anto_tables.
     */
    distinct?: Vocab_anto_tableScalarFieldEnum | Vocab_anto_tableScalarFieldEnum[]
  }

  /**
   * vocab_anto_table findMany
   */
  export type vocab_anto_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_anto_table
     */
    select?: vocab_anto_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_anto_table
     */
    omit?: vocab_anto_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_anto_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_anto_tables to fetch.
     */
    where?: vocab_anto_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_anto_tables to fetch.
     */
    orderBy?: vocab_anto_tableOrderByWithRelationInput | vocab_anto_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vocab_anto_tables.
     */
    cursor?: vocab_anto_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_anto_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_anto_tables.
     */
    skip?: number
    distinct?: Vocab_anto_tableScalarFieldEnum | Vocab_anto_tableScalarFieldEnum[]
  }

  /**
   * vocab_anto_table create
   */
  export type vocab_anto_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_anto_table
     */
    select?: vocab_anto_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_anto_table
     */
    omit?: vocab_anto_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_anto_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a vocab_anto_table.
     */
    data: XOR<vocab_anto_tableCreateInput, vocab_anto_tableUncheckedCreateInput>
  }

  /**
   * vocab_anto_table createMany
   */
  export type vocab_anto_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vocab_anto_tables.
     */
    data: vocab_anto_tableCreateManyInput | vocab_anto_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vocab_anto_table update
   */
  export type vocab_anto_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_anto_table
     */
    select?: vocab_anto_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_anto_table
     */
    omit?: vocab_anto_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_anto_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a vocab_anto_table.
     */
    data: XOR<vocab_anto_tableUpdateInput, vocab_anto_tableUncheckedUpdateInput>
    /**
     * Choose, which vocab_anto_table to update.
     */
    where: vocab_anto_tableWhereUniqueInput
  }

  /**
   * vocab_anto_table updateMany
   */
  export type vocab_anto_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vocab_anto_tables.
     */
    data: XOR<vocab_anto_tableUpdateManyMutationInput, vocab_anto_tableUncheckedUpdateManyInput>
    /**
     * Filter which vocab_anto_tables to update
     */
    where?: vocab_anto_tableWhereInput
    /**
     * Limit how many vocab_anto_tables to update.
     */
    limit?: number
  }

  /**
   * vocab_anto_table upsert
   */
  export type vocab_anto_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_anto_table
     */
    select?: vocab_anto_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_anto_table
     */
    omit?: vocab_anto_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_anto_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the vocab_anto_table to update in case it exists.
     */
    where: vocab_anto_tableWhereUniqueInput
    /**
     * In case the vocab_anto_table found by the `where` argument doesn't exist, create a new vocab_anto_table with this data.
     */
    create: XOR<vocab_anto_tableCreateInput, vocab_anto_tableUncheckedCreateInput>
    /**
     * In case the vocab_anto_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vocab_anto_tableUpdateInput, vocab_anto_tableUncheckedUpdateInput>
  }

  /**
   * vocab_anto_table delete
   */
  export type vocab_anto_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_anto_table
     */
    select?: vocab_anto_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_anto_table
     */
    omit?: vocab_anto_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_anto_tableInclude<ExtArgs> | null
    /**
     * Filter which vocab_anto_table to delete.
     */
    where: vocab_anto_tableWhereUniqueInput
  }

  /**
   * vocab_anto_table deleteMany
   */
  export type vocab_anto_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocab_anto_tables to delete
     */
    where?: vocab_anto_tableWhereInput
    /**
     * Limit how many vocab_anto_tables to delete.
     */
    limit?: number
  }

  /**
   * vocab_anto_table without action
   */
  export type vocab_anto_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_anto_table
     */
    select?: vocab_anto_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_anto_table
     */
    omit?: vocab_anto_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_anto_tableInclude<ExtArgs> | null
  }


  /**
   * Model vocab_mean_table
   */

  export type AggregateVocab_mean_table = {
    _count: Vocab_mean_tableCountAggregateOutputType | null
    _avg: Vocab_mean_tableAvgAggregateOutputType | null
    _sum: Vocab_mean_tableSumAggregateOutputType | null
    _min: Vocab_mean_tableMinAggregateOutputType | null
    _max: Vocab_mean_tableMaxAggregateOutputType | null
  }

  export type Vocab_mean_tableAvgAggregateOutputType = {
    mean_id: number | null
    word_id: number | null
  }

  export type Vocab_mean_tableSumAggregateOutputType = {
    mean_id: number | null
    word_id: number | null
  }

  export type Vocab_mean_tableMinAggregateOutputType = {
    mean_id: number | null
    word_id: number | null
    word_meaning: string | null
    word_example: string | null
    word_image: string | null
  }

  export type Vocab_mean_tableMaxAggregateOutputType = {
    mean_id: number | null
    word_id: number | null
    word_meaning: string | null
    word_example: string | null
    word_image: string | null
  }

  export type Vocab_mean_tableCountAggregateOutputType = {
    mean_id: number
    word_id: number
    word_meaning: number
    word_example: number
    word_image: number
    _all: number
  }


  export type Vocab_mean_tableAvgAggregateInputType = {
    mean_id?: true
    word_id?: true
  }

  export type Vocab_mean_tableSumAggregateInputType = {
    mean_id?: true
    word_id?: true
  }

  export type Vocab_mean_tableMinAggregateInputType = {
    mean_id?: true
    word_id?: true
    word_meaning?: true
    word_example?: true
    word_image?: true
  }

  export type Vocab_mean_tableMaxAggregateInputType = {
    mean_id?: true
    word_id?: true
    word_meaning?: true
    word_example?: true
    word_image?: true
  }

  export type Vocab_mean_tableCountAggregateInputType = {
    mean_id?: true
    word_id?: true
    word_meaning?: true
    word_example?: true
    word_image?: true
    _all?: true
  }

  export type Vocab_mean_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocab_mean_table to aggregate.
     */
    where?: vocab_mean_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_mean_tables to fetch.
     */
    orderBy?: vocab_mean_tableOrderByWithRelationInput | vocab_mean_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vocab_mean_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_mean_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_mean_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vocab_mean_tables
    **/
    _count?: true | Vocab_mean_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vocab_mean_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vocab_mean_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vocab_mean_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vocab_mean_tableMaxAggregateInputType
  }

  export type GetVocab_mean_tableAggregateType<T extends Vocab_mean_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateVocab_mean_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocab_mean_table[P]>
      : GetScalarType<T[P], AggregateVocab_mean_table[P]>
  }




  export type vocab_mean_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vocab_mean_tableWhereInput
    orderBy?: vocab_mean_tableOrderByWithAggregationInput | vocab_mean_tableOrderByWithAggregationInput[]
    by: Vocab_mean_tableScalarFieldEnum[] | Vocab_mean_tableScalarFieldEnum
    having?: vocab_mean_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vocab_mean_tableCountAggregateInputType | true
    _avg?: Vocab_mean_tableAvgAggregateInputType
    _sum?: Vocab_mean_tableSumAggregateInputType
    _min?: Vocab_mean_tableMinAggregateInputType
    _max?: Vocab_mean_tableMaxAggregateInputType
  }

  export type Vocab_mean_tableGroupByOutputType = {
    mean_id: number
    word_id: number
    word_meaning: string
    word_example: string | null
    word_image: string | null
    _count: Vocab_mean_tableCountAggregateOutputType | null
    _avg: Vocab_mean_tableAvgAggregateOutputType | null
    _sum: Vocab_mean_tableSumAggregateOutputType | null
    _min: Vocab_mean_tableMinAggregateOutputType | null
    _max: Vocab_mean_tableMaxAggregateOutputType | null
  }

  type GetVocab_mean_tableGroupByPayload<T extends vocab_mean_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vocab_mean_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vocab_mean_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vocab_mean_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Vocab_mean_tableGroupByOutputType[P]>
        }
      >
    >


  export type vocab_mean_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mean_id?: boolean
    word_id?: boolean
    word_meaning?: boolean
    word_example?: boolean
    word_image?: boolean
    vocab_table?: boolean | vocab_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocab_mean_table"]>



  export type vocab_mean_tableSelectScalar = {
    mean_id?: boolean
    word_id?: boolean
    word_meaning?: boolean
    word_example?: boolean
    word_image?: boolean
  }

  export type vocab_mean_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mean_id" | "word_id" | "word_meaning" | "word_example" | "word_image", ExtArgs["result"]["vocab_mean_table"]>
  export type vocab_mean_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocab_table?: boolean | vocab_tableDefaultArgs<ExtArgs>
  }

  export type $vocab_mean_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vocab_mean_table"
    objects: {
      vocab_table: Prisma.$vocab_tablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      mean_id: number
      word_id: number
      word_meaning: string
      word_example: string | null
      word_image: string | null
    }, ExtArgs["result"]["vocab_mean_table"]>
    composites: {}
  }

  type vocab_mean_tableGetPayload<S extends boolean | null | undefined | vocab_mean_tableDefaultArgs> = $Result.GetResult<Prisma.$vocab_mean_tablePayload, S>

  type vocab_mean_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vocab_mean_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vocab_mean_tableCountAggregateInputType | true
    }

  export interface vocab_mean_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vocab_mean_table'], meta: { name: 'vocab_mean_table' } }
    /**
     * Find zero or one Vocab_mean_table that matches the filter.
     * @param {vocab_mean_tableFindUniqueArgs} args - Arguments to find a Vocab_mean_table
     * @example
     * // Get one Vocab_mean_table
     * const vocab_mean_table = await prisma.vocab_mean_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vocab_mean_tableFindUniqueArgs>(args: SelectSubset<T, vocab_mean_tableFindUniqueArgs<ExtArgs>>): Prisma__vocab_mean_tableClient<$Result.GetResult<Prisma.$vocab_mean_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vocab_mean_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vocab_mean_tableFindUniqueOrThrowArgs} args - Arguments to find a Vocab_mean_table
     * @example
     * // Get one Vocab_mean_table
     * const vocab_mean_table = await prisma.vocab_mean_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vocab_mean_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, vocab_mean_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vocab_mean_tableClient<$Result.GetResult<Prisma.$vocab_mean_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocab_mean_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_mean_tableFindFirstArgs} args - Arguments to find a Vocab_mean_table
     * @example
     * // Get one Vocab_mean_table
     * const vocab_mean_table = await prisma.vocab_mean_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vocab_mean_tableFindFirstArgs>(args?: SelectSubset<T, vocab_mean_tableFindFirstArgs<ExtArgs>>): Prisma__vocab_mean_tableClient<$Result.GetResult<Prisma.$vocab_mean_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocab_mean_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_mean_tableFindFirstOrThrowArgs} args - Arguments to find a Vocab_mean_table
     * @example
     * // Get one Vocab_mean_table
     * const vocab_mean_table = await prisma.vocab_mean_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vocab_mean_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, vocab_mean_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__vocab_mean_tableClient<$Result.GetResult<Prisma.$vocab_mean_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vocab_mean_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_mean_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vocab_mean_tables
     * const vocab_mean_tables = await prisma.vocab_mean_table.findMany()
     * 
     * // Get first 10 Vocab_mean_tables
     * const vocab_mean_tables = await prisma.vocab_mean_table.findMany({ take: 10 })
     * 
     * // Only select the `mean_id`
     * const vocab_mean_tableWithMean_idOnly = await prisma.vocab_mean_table.findMany({ select: { mean_id: true } })
     * 
     */
    findMany<T extends vocab_mean_tableFindManyArgs>(args?: SelectSubset<T, vocab_mean_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vocab_mean_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vocab_mean_table.
     * @param {vocab_mean_tableCreateArgs} args - Arguments to create a Vocab_mean_table.
     * @example
     * // Create one Vocab_mean_table
     * const Vocab_mean_table = await prisma.vocab_mean_table.create({
     *   data: {
     *     // ... data to create a Vocab_mean_table
     *   }
     * })
     * 
     */
    create<T extends vocab_mean_tableCreateArgs>(args: SelectSubset<T, vocab_mean_tableCreateArgs<ExtArgs>>): Prisma__vocab_mean_tableClient<$Result.GetResult<Prisma.$vocab_mean_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vocab_mean_tables.
     * @param {vocab_mean_tableCreateManyArgs} args - Arguments to create many Vocab_mean_tables.
     * @example
     * // Create many Vocab_mean_tables
     * const vocab_mean_table = await prisma.vocab_mean_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vocab_mean_tableCreateManyArgs>(args?: SelectSubset<T, vocab_mean_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vocab_mean_table.
     * @param {vocab_mean_tableDeleteArgs} args - Arguments to delete one Vocab_mean_table.
     * @example
     * // Delete one Vocab_mean_table
     * const Vocab_mean_table = await prisma.vocab_mean_table.delete({
     *   where: {
     *     // ... filter to delete one Vocab_mean_table
     *   }
     * })
     * 
     */
    delete<T extends vocab_mean_tableDeleteArgs>(args: SelectSubset<T, vocab_mean_tableDeleteArgs<ExtArgs>>): Prisma__vocab_mean_tableClient<$Result.GetResult<Prisma.$vocab_mean_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vocab_mean_table.
     * @param {vocab_mean_tableUpdateArgs} args - Arguments to update one Vocab_mean_table.
     * @example
     * // Update one Vocab_mean_table
     * const vocab_mean_table = await prisma.vocab_mean_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vocab_mean_tableUpdateArgs>(args: SelectSubset<T, vocab_mean_tableUpdateArgs<ExtArgs>>): Prisma__vocab_mean_tableClient<$Result.GetResult<Prisma.$vocab_mean_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vocab_mean_tables.
     * @param {vocab_mean_tableDeleteManyArgs} args - Arguments to filter Vocab_mean_tables to delete.
     * @example
     * // Delete a few Vocab_mean_tables
     * const { count } = await prisma.vocab_mean_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vocab_mean_tableDeleteManyArgs>(args?: SelectSubset<T, vocab_mean_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vocab_mean_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_mean_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vocab_mean_tables
     * const vocab_mean_table = await prisma.vocab_mean_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vocab_mean_tableUpdateManyArgs>(args: SelectSubset<T, vocab_mean_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vocab_mean_table.
     * @param {vocab_mean_tableUpsertArgs} args - Arguments to update or create a Vocab_mean_table.
     * @example
     * // Update or create a Vocab_mean_table
     * const vocab_mean_table = await prisma.vocab_mean_table.upsert({
     *   create: {
     *     // ... data to create a Vocab_mean_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vocab_mean_table we want to update
     *   }
     * })
     */
    upsert<T extends vocab_mean_tableUpsertArgs>(args: SelectSubset<T, vocab_mean_tableUpsertArgs<ExtArgs>>): Prisma__vocab_mean_tableClient<$Result.GetResult<Prisma.$vocab_mean_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vocab_mean_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_mean_tableCountArgs} args - Arguments to filter Vocab_mean_tables to count.
     * @example
     * // Count the number of Vocab_mean_tables
     * const count = await prisma.vocab_mean_table.count({
     *   where: {
     *     // ... the filter for the Vocab_mean_tables we want to count
     *   }
     * })
    **/
    count<T extends vocab_mean_tableCountArgs>(
      args?: Subset<T, vocab_mean_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vocab_mean_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vocab_mean_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vocab_mean_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Vocab_mean_tableAggregateArgs>(args: Subset<T, Vocab_mean_tableAggregateArgs>): Prisma.PrismaPromise<GetVocab_mean_tableAggregateType<T>>

    /**
     * Group by Vocab_mean_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_mean_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vocab_mean_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vocab_mean_tableGroupByArgs['orderBy'] }
        : { orderBy?: vocab_mean_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vocab_mean_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocab_mean_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vocab_mean_table model
   */
  readonly fields: vocab_mean_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vocab_mean_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vocab_mean_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vocab_table<T extends vocab_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vocab_tableDefaultArgs<ExtArgs>>): Prisma__vocab_tableClient<$Result.GetResult<Prisma.$vocab_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vocab_mean_table model
   */
  interface vocab_mean_tableFieldRefs {
    readonly mean_id: FieldRef<"vocab_mean_table", 'Int'>
    readonly word_id: FieldRef<"vocab_mean_table", 'Int'>
    readonly word_meaning: FieldRef<"vocab_mean_table", 'String'>
    readonly word_example: FieldRef<"vocab_mean_table", 'String'>
    readonly word_image: FieldRef<"vocab_mean_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vocab_mean_table findUnique
   */
  export type vocab_mean_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_mean_table
     */
    select?: vocab_mean_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_mean_table
     */
    omit?: vocab_mean_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_mean_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_mean_table to fetch.
     */
    where: vocab_mean_tableWhereUniqueInput
  }

  /**
   * vocab_mean_table findUniqueOrThrow
   */
  export type vocab_mean_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_mean_table
     */
    select?: vocab_mean_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_mean_table
     */
    omit?: vocab_mean_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_mean_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_mean_table to fetch.
     */
    where: vocab_mean_tableWhereUniqueInput
  }

  /**
   * vocab_mean_table findFirst
   */
  export type vocab_mean_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_mean_table
     */
    select?: vocab_mean_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_mean_table
     */
    omit?: vocab_mean_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_mean_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_mean_table to fetch.
     */
    where?: vocab_mean_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_mean_tables to fetch.
     */
    orderBy?: vocab_mean_tableOrderByWithRelationInput | vocab_mean_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocab_mean_tables.
     */
    cursor?: vocab_mean_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_mean_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_mean_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocab_mean_tables.
     */
    distinct?: Vocab_mean_tableScalarFieldEnum | Vocab_mean_tableScalarFieldEnum[]
  }

  /**
   * vocab_mean_table findFirstOrThrow
   */
  export type vocab_mean_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_mean_table
     */
    select?: vocab_mean_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_mean_table
     */
    omit?: vocab_mean_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_mean_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_mean_table to fetch.
     */
    where?: vocab_mean_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_mean_tables to fetch.
     */
    orderBy?: vocab_mean_tableOrderByWithRelationInput | vocab_mean_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocab_mean_tables.
     */
    cursor?: vocab_mean_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_mean_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_mean_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocab_mean_tables.
     */
    distinct?: Vocab_mean_tableScalarFieldEnum | Vocab_mean_tableScalarFieldEnum[]
  }

  /**
   * vocab_mean_table findMany
   */
  export type vocab_mean_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_mean_table
     */
    select?: vocab_mean_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_mean_table
     */
    omit?: vocab_mean_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_mean_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_mean_tables to fetch.
     */
    where?: vocab_mean_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_mean_tables to fetch.
     */
    orderBy?: vocab_mean_tableOrderByWithRelationInput | vocab_mean_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vocab_mean_tables.
     */
    cursor?: vocab_mean_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_mean_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_mean_tables.
     */
    skip?: number
    distinct?: Vocab_mean_tableScalarFieldEnum | Vocab_mean_tableScalarFieldEnum[]
  }

  /**
   * vocab_mean_table create
   */
  export type vocab_mean_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_mean_table
     */
    select?: vocab_mean_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_mean_table
     */
    omit?: vocab_mean_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_mean_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a vocab_mean_table.
     */
    data: XOR<vocab_mean_tableCreateInput, vocab_mean_tableUncheckedCreateInput>
  }

  /**
   * vocab_mean_table createMany
   */
  export type vocab_mean_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vocab_mean_tables.
     */
    data: vocab_mean_tableCreateManyInput | vocab_mean_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vocab_mean_table update
   */
  export type vocab_mean_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_mean_table
     */
    select?: vocab_mean_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_mean_table
     */
    omit?: vocab_mean_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_mean_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a vocab_mean_table.
     */
    data: XOR<vocab_mean_tableUpdateInput, vocab_mean_tableUncheckedUpdateInput>
    /**
     * Choose, which vocab_mean_table to update.
     */
    where: vocab_mean_tableWhereUniqueInput
  }

  /**
   * vocab_mean_table updateMany
   */
  export type vocab_mean_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vocab_mean_tables.
     */
    data: XOR<vocab_mean_tableUpdateManyMutationInput, vocab_mean_tableUncheckedUpdateManyInput>
    /**
     * Filter which vocab_mean_tables to update
     */
    where?: vocab_mean_tableWhereInput
    /**
     * Limit how many vocab_mean_tables to update.
     */
    limit?: number
  }

  /**
   * vocab_mean_table upsert
   */
  export type vocab_mean_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_mean_table
     */
    select?: vocab_mean_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_mean_table
     */
    omit?: vocab_mean_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_mean_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the vocab_mean_table to update in case it exists.
     */
    where: vocab_mean_tableWhereUniqueInput
    /**
     * In case the vocab_mean_table found by the `where` argument doesn't exist, create a new vocab_mean_table with this data.
     */
    create: XOR<vocab_mean_tableCreateInput, vocab_mean_tableUncheckedCreateInput>
    /**
     * In case the vocab_mean_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vocab_mean_tableUpdateInput, vocab_mean_tableUncheckedUpdateInput>
  }

  /**
   * vocab_mean_table delete
   */
  export type vocab_mean_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_mean_table
     */
    select?: vocab_mean_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_mean_table
     */
    omit?: vocab_mean_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_mean_tableInclude<ExtArgs> | null
    /**
     * Filter which vocab_mean_table to delete.
     */
    where: vocab_mean_tableWhereUniqueInput
  }

  /**
   * vocab_mean_table deleteMany
   */
  export type vocab_mean_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocab_mean_tables to delete
     */
    where?: vocab_mean_tableWhereInput
    /**
     * Limit how many vocab_mean_tables to delete.
     */
    limit?: number
  }

  /**
   * vocab_mean_table without action
   */
  export type vocab_mean_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_mean_table
     */
    select?: vocab_mean_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_mean_table
     */
    omit?: vocab_mean_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_mean_tableInclude<ExtArgs> | null
  }


  /**
   * Model vocab_rela_table
   */

  export type AggregateVocab_rela_table = {
    _count: Vocab_rela_tableCountAggregateOutputType | null
    _avg: Vocab_rela_tableAvgAggregateOutputType | null
    _sum: Vocab_rela_tableSumAggregateOutputType | null
    _min: Vocab_rela_tableMinAggregateOutputType | null
    _max: Vocab_rela_tableMaxAggregateOutputType | null
  }

  export type Vocab_rela_tableAvgAggregateOutputType = {
    word_id: number | null
  }

  export type Vocab_rela_tableSumAggregateOutputType = {
    word_id: number | null
  }

  export type Vocab_rela_tableMinAggregateOutputType = {
    word_id: number | null
    word_related_name: string | null
  }

  export type Vocab_rela_tableMaxAggregateOutputType = {
    word_id: number | null
    word_related_name: string | null
  }

  export type Vocab_rela_tableCountAggregateOutputType = {
    word_id: number
    word_related_name: number
    _all: number
  }


  export type Vocab_rela_tableAvgAggregateInputType = {
    word_id?: true
  }

  export type Vocab_rela_tableSumAggregateInputType = {
    word_id?: true
  }

  export type Vocab_rela_tableMinAggregateInputType = {
    word_id?: true
    word_related_name?: true
  }

  export type Vocab_rela_tableMaxAggregateInputType = {
    word_id?: true
    word_related_name?: true
  }

  export type Vocab_rela_tableCountAggregateInputType = {
    word_id?: true
    word_related_name?: true
    _all?: true
  }

  export type Vocab_rela_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocab_rela_table to aggregate.
     */
    where?: vocab_rela_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_rela_tables to fetch.
     */
    orderBy?: vocab_rela_tableOrderByWithRelationInput | vocab_rela_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vocab_rela_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_rela_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_rela_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vocab_rela_tables
    **/
    _count?: true | Vocab_rela_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vocab_rela_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vocab_rela_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vocab_rela_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vocab_rela_tableMaxAggregateInputType
  }

  export type GetVocab_rela_tableAggregateType<T extends Vocab_rela_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateVocab_rela_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocab_rela_table[P]>
      : GetScalarType<T[P], AggregateVocab_rela_table[P]>
  }




  export type vocab_rela_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vocab_rela_tableWhereInput
    orderBy?: vocab_rela_tableOrderByWithAggregationInput | vocab_rela_tableOrderByWithAggregationInput[]
    by: Vocab_rela_tableScalarFieldEnum[] | Vocab_rela_tableScalarFieldEnum
    having?: vocab_rela_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vocab_rela_tableCountAggregateInputType | true
    _avg?: Vocab_rela_tableAvgAggregateInputType
    _sum?: Vocab_rela_tableSumAggregateInputType
    _min?: Vocab_rela_tableMinAggregateInputType
    _max?: Vocab_rela_tableMaxAggregateInputType
  }

  export type Vocab_rela_tableGroupByOutputType = {
    word_id: number
    word_related_name: string
    _count: Vocab_rela_tableCountAggregateOutputType | null
    _avg: Vocab_rela_tableAvgAggregateOutputType | null
    _sum: Vocab_rela_tableSumAggregateOutputType | null
    _min: Vocab_rela_tableMinAggregateOutputType | null
    _max: Vocab_rela_tableMaxAggregateOutputType | null
  }

  type GetVocab_rela_tableGroupByPayload<T extends vocab_rela_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vocab_rela_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vocab_rela_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vocab_rela_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Vocab_rela_tableGroupByOutputType[P]>
        }
      >
    >


  export type vocab_rela_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    word_id?: boolean
    word_related_name?: boolean
    vocab_table?: boolean | vocab_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocab_rela_table"]>



  export type vocab_rela_tableSelectScalar = {
    word_id?: boolean
    word_related_name?: boolean
  }

  export type vocab_rela_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"word_id" | "word_related_name", ExtArgs["result"]["vocab_rela_table"]>
  export type vocab_rela_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocab_table?: boolean | vocab_tableDefaultArgs<ExtArgs>
  }

  export type $vocab_rela_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vocab_rela_table"
    objects: {
      vocab_table: Prisma.$vocab_tablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      word_id: number
      word_related_name: string
    }, ExtArgs["result"]["vocab_rela_table"]>
    composites: {}
  }

  type vocab_rela_tableGetPayload<S extends boolean | null | undefined | vocab_rela_tableDefaultArgs> = $Result.GetResult<Prisma.$vocab_rela_tablePayload, S>

  type vocab_rela_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vocab_rela_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vocab_rela_tableCountAggregateInputType | true
    }

  export interface vocab_rela_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vocab_rela_table'], meta: { name: 'vocab_rela_table' } }
    /**
     * Find zero or one Vocab_rela_table that matches the filter.
     * @param {vocab_rela_tableFindUniqueArgs} args - Arguments to find a Vocab_rela_table
     * @example
     * // Get one Vocab_rela_table
     * const vocab_rela_table = await prisma.vocab_rela_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vocab_rela_tableFindUniqueArgs>(args: SelectSubset<T, vocab_rela_tableFindUniqueArgs<ExtArgs>>): Prisma__vocab_rela_tableClient<$Result.GetResult<Prisma.$vocab_rela_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vocab_rela_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vocab_rela_tableFindUniqueOrThrowArgs} args - Arguments to find a Vocab_rela_table
     * @example
     * // Get one Vocab_rela_table
     * const vocab_rela_table = await prisma.vocab_rela_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vocab_rela_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, vocab_rela_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vocab_rela_tableClient<$Result.GetResult<Prisma.$vocab_rela_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocab_rela_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_rela_tableFindFirstArgs} args - Arguments to find a Vocab_rela_table
     * @example
     * // Get one Vocab_rela_table
     * const vocab_rela_table = await prisma.vocab_rela_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vocab_rela_tableFindFirstArgs>(args?: SelectSubset<T, vocab_rela_tableFindFirstArgs<ExtArgs>>): Prisma__vocab_rela_tableClient<$Result.GetResult<Prisma.$vocab_rela_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocab_rela_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_rela_tableFindFirstOrThrowArgs} args - Arguments to find a Vocab_rela_table
     * @example
     * // Get one Vocab_rela_table
     * const vocab_rela_table = await prisma.vocab_rela_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vocab_rela_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, vocab_rela_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__vocab_rela_tableClient<$Result.GetResult<Prisma.$vocab_rela_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vocab_rela_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_rela_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vocab_rela_tables
     * const vocab_rela_tables = await prisma.vocab_rela_table.findMany()
     * 
     * // Get first 10 Vocab_rela_tables
     * const vocab_rela_tables = await prisma.vocab_rela_table.findMany({ take: 10 })
     * 
     * // Only select the `word_id`
     * const vocab_rela_tableWithWord_idOnly = await prisma.vocab_rela_table.findMany({ select: { word_id: true } })
     * 
     */
    findMany<T extends vocab_rela_tableFindManyArgs>(args?: SelectSubset<T, vocab_rela_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vocab_rela_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vocab_rela_table.
     * @param {vocab_rela_tableCreateArgs} args - Arguments to create a Vocab_rela_table.
     * @example
     * // Create one Vocab_rela_table
     * const Vocab_rela_table = await prisma.vocab_rela_table.create({
     *   data: {
     *     // ... data to create a Vocab_rela_table
     *   }
     * })
     * 
     */
    create<T extends vocab_rela_tableCreateArgs>(args: SelectSubset<T, vocab_rela_tableCreateArgs<ExtArgs>>): Prisma__vocab_rela_tableClient<$Result.GetResult<Prisma.$vocab_rela_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vocab_rela_tables.
     * @param {vocab_rela_tableCreateManyArgs} args - Arguments to create many Vocab_rela_tables.
     * @example
     * // Create many Vocab_rela_tables
     * const vocab_rela_table = await prisma.vocab_rela_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vocab_rela_tableCreateManyArgs>(args?: SelectSubset<T, vocab_rela_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vocab_rela_table.
     * @param {vocab_rela_tableDeleteArgs} args - Arguments to delete one Vocab_rela_table.
     * @example
     * // Delete one Vocab_rela_table
     * const Vocab_rela_table = await prisma.vocab_rela_table.delete({
     *   where: {
     *     // ... filter to delete one Vocab_rela_table
     *   }
     * })
     * 
     */
    delete<T extends vocab_rela_tableDeleteArgs>(args: SelectSubset<T, vocab_rela_tableDeleteArgs<ExtArgs>>): Prisma__vocab_rela_tableClient<$Result.GetResult<Prisma.$vocab_rela_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vocab_rela_table.
     * @param {vocab_rela_tableUpdateArgs} args - Arguments to update one Vocab_rela_table.
     * @example
     * // Update one Vocab_rela_table
     * const vocab_rela_table = await prisma.vocab_rela_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vocab_rela_tableUpdateArgs>(args: SelectSubset<T, vocab_rela_tableUpdateArgs<ExtArgs>>): Prisma__vocab_rela_tableClient<$Result.GetResult<Prisma.$vocab_rela_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vocab_rela_tables.
     * @param {vocab_rela_tableDeleteManyArgs} args - Arguments to filter Vocab_rela_tables to delete.
     * @example
     * // Delete a few Vocab_rela_tables
     * const { count } = await prisma.vocab_rela_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vocab_rela_tableDeleteManyArgs>(args?: SelectSubset<T, vocab_rela_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vocab_rela_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_rela_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vocab_rela_tables
     * const vocab_rela_table = await prisma.vocab_rela_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vocab_rela_tableUpdateManyArgs>(args: SelectSubset<T, vocab_rela_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vocab_rela_table.
     * @param {vocab_rela_tableUpsertArgs} args - Arguments to update or create a Vocab_rela_table.
     * @example
     * // Update or create a Vocab_rela_table
     * const vocab_rela_table = await prisma.vocab_rela_table.upsert({
     *   create: {
     *     // ... data to create a Vocab_rela_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vocab_rela_table we want to update
     *   }
     * })
     */
    upsert<T extends vocab_rela_tableUpsertArgs>(args: SelectSubset<T, vocab_rela_tableUpsertArgs<ExtArgs>>): Prisma__vocab_rela_tableClient<$Result.GetResult<Prisma.$vocab_rela_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vocab_rela_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_rela_tableCountArgs} args - Arguments to filter Vocab_rela_tables to count.
     * @example
     * // Count the number of Vocab_rela_tables
     * const count = await prisma.vocab_rela_table.count({
     *   where: {
     *     // ... the filter for the Vocab_rela_tables we want to count
     *   }
     * })
    **/
    count<T extends vocab_rela_tableCountArgs>(
      args?: Subset<T, vocab_rela_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vocab_rela_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vocab_rela_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vocab_rela_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Vocab_rela_tableAggregateArgs>(args: Subset<T, Vocab_rela_tableAggregateArgs>): Prisma.PrismaPromise<GetVocab_rela_tableAggregateType<T>>

    /**
     * Group by Vocab_rela_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_rela_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vocab_rela_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vocab_rela_tableGroupByArgs['orderBy'] }
        : { orderBy?: vocab_rela_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vocab_rela_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocab_rela_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vocab_rela_table model
   */
  readonly fields: vocab_rela_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vocab_rela_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vocab_rela_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vocab_table<T extends vocab_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vocab_tableDefaultArgs<ExtArgs>>): Prisma__vocab_tableClient<$Result.GetResult<Prisma.$vocab_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vocab_rela_table model
   */
  interface vocab_rela_tableFieldRefs {
    readonly word_id: FieldRef<"vocab_rela_table", 'Int'>
    readonly word_related_name: FieldRef<"vocab_rela_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vocab_rela_table findUnique
   */
  export type vocab_rela_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_rela_table
     */
    select?: vocab_rela_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_rela_table
     */
    omit?: vocab_rela_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_rela_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_rela_table to fetch.
     */
    where: vocab_rela_tableWhereUniqueInput
  }

  /**
   * vocab_rela_table findUniqueOrThrow
   */
  export type vocab_rela_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_rela_table
     */
    select?: vocab_rela_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_rela_table
     */
    omit?: vocab_rela_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_rela_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_rela_table to fetch.
     */
    where: vocab_rela_tableWhereUniqueInput
  }

  /**
   * vocab_rela_table findFirst
   */
  export type vocab_rela_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_rela_table
     */
    select?: vocab_rela_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_rela_table
     */
    omit?: vocab_rela_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_rela_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_rela_table to fetch.
     */
    where?: vocab_rela_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_rela_tables to fetch.
     */
    orderBy?: vocab_rela_tableOrderByWithRelationInput | vocab_rela_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocab_rela_tables.
     */
    cursor?: vocab_rela_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_rela_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_rela_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocab_rela_tables.
     */
    distinct?: Vocab_rela_tableScalarFieldEnum | Vocab_rela_tableScalarFieldEnum[]
  }

  /**
   * vocab_rela_table findFirstOrThrow
   */
  export type vocab_rela_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_rela_table
     */
    select?: vocab_rela_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_rela_table
     */
    omit?: vocab_rela_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_rela_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_rela_table to fetch.
     */
    where?: vocab_rela_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_rela_tables to fetch.
     */
    orderBy?: vocab_rela_tableOrderByWithRelationInput | vocab_rela_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocab_rela_tables.
     */
    cursor?: vocab_rela_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_rela_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_rela_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocab_rela_tables.
     */
    distinct?: Vocab_rela_tableScalarFieldEnum | Vocab_rela_tableScalarFieldEnum[]
  }

  /**
   * vocab_rela_table findMany
   */
  export type vocab_rela_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_rela_table
     */
    select?: vocab_rela_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_rela_table
     */
    omit?: vocab_rela_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_rela_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_rela_tables to fetch.
     */
    where?: vocab_rela_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_rela_tables to fetch.
     */
    orderBy?: vocab_rela_tableOrderByWithRelationInput | vocab_rela_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vocab_rela_tables.
     */
    cursor?: vocab_rela_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_rela_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_rela_tables.
     */
    skip?: number
    distinct?: Vocab_rela_tableScalarFieldEnum | Vocab_rela_tableScalarFieldEnum[]
  }

  /**
   * vocab_rela_table create
   */
  export type vocab_rela_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_rela_table
     */
    select?: vocab_rela_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_rela_table
     */
    omit?: vocab_rela_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_rela_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a vocab_rela_table.
     */
    data: XOR<vocab_rela_tableCreateInput, vocab_rela_tableUncheckedCreateInput>
  }

  /**
   * vocab_rela_table createMany
   */
  export type vocab_rela_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vocab_rela_tables.
     */
    data: vocab_rela_tableCreateManyInput | vocab_rela_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vocab_rela_table update
   */
  export type vocab_rela_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_rela_table
     */
    select?: vocab_rela_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_rela_table
     */
    omit?: vocab_rela_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_rela_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a vocab_rela_table.
     */
    data: XOR<vocab_rela_tableUpdateInput, vocab_rela_tableUncheckedUpdateInput>
    /**
     * Choose, which vocab_rela_table to update.
     */
    where: vocab_rela_tableWhereUniqueInput
  }

  /**
   * vocab_rela_table updateMany
   */
  export type vocab_rela_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vocab_rela_tables.
     */
    data: XOR<vocab_rela_tableUpdateManyMutationInput, vocab_rela_tableUncheckedUpdateManyInput>
    /**
     * Filter which vocab_rela_tables to update
     */
    where?: vocab_rela_tableWhereInput
    /**
     * Limit how many vocab_rela_tables to update.
     */
    limit?: number
  }

  /**
   * vocab_rela_table upsert
   */
  export type vocab_rela_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_rela_table
     */
    select?: vocab_rela_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_rela_table
     */
    omit?: vocab_rela_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_rela_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the vocab_rela_table to update in case it exists.
     */
    where: vocab_rela_tableWhereUniqueInput
    /**
     * In case the vocab_rela_table found by the `where` argument doesn't exist, create a new vocab_rela_table with this data.
     */
    create: XOR<vocab_rela_tableCreateInput, vocab_rela_tableUncheckedCreateInput>
    /**
     * In case the vocab_rela_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vocab_rela_tableUpdateInput, vocab_rela_tableUncheckedUpdateInput>
  }

  /**
   * vocab_rela_table delete
   */
  export type vocab_rela_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_rela_table
     */
    select?: vocab_rela_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_rela_table
     */
    omit?: vocab_rela_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_rela_tableInclude<ExtArgs> | null
    /**
     * Filter which vocab_rela_table to delete.
     */
    where: vocab_rela_tableWhereUniqueInput
  }

  /**
   * vocab_rela_table deleteMany
   */
  export type vocab_rela_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocab_rela_tables to delete
     */
    where?: vocab_rela_tableWhereInput
    /**
     * Limit how many vocab_rela_tables to delete.
     */
    limit?: number
  }

  /**
   * vocab_rela_table without action
   */
  export type vocab_rela_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_rela_table
     */
    select?: vocab_rela_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_rela_table
     */
    omit?: vocab_rela_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_rela_tableInclude<ExtArgs> | null
  }


  /**
   * Model vocab_syn_table
   */

  export type AggregateVocab_syn_table = {
    _count: Vocab_syn_tableCountAggregateOutputType | null
    _avg: Vocab_syn_tableAvgAggregateOutputType | null
    _sum: Vocab_syn_tableSumAggregateOutputType | null
    _min: Vocab_syn_tableMinAggregateOutputType | null
    _max: Vocab_syn_tableMaxAggregateOutputType | null
  }

  export type Vocab_syn_tableAvgAggregateOutputType = {
    word_id: number | null
  }

  export type Vocab_syn_tableSumAggregateOutputType = {
    word_id: number | null
  }

  export type Vocab_syn_tableMinAggregateOutputType = {
    word_id: number | null
    word_synonyms: string | null
  }

  export type Vocab_syn_tableMaxAggregateOutputType = {
    word_id: number | null
    word_synonyms: string | null
  }

  export type Vocab_syn_tableCountAggregateOutputType = {
    word_id: number
    word_synonyms: number
    _all: number
  }


  export type Vocab_syn_tableAvgAggregateInputType = {
    word_id?: true
  }

  export type Vocab_syn_tableSumAggregateInputType = {
    word_id?: true
  }

  export type Vocab_syn_tableMinAggregateInputType = {
    word_id?: true
    word_synonyms?: true
  }

  export type Vocab_syn_tableMaxAggregateInputType = {
    word_id?: true
    word_synonyms?: true
  }

  export type Vocab_syn_tableCountAggregateInputType = {
    word_id?: true
    word_synonyms?: true
    _all?: true
  }

  export type Vocab_syn_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocab_syn_table to aggregate.
     */
    where?: vocab_syn_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_syn_tables to fetch.
     */
    orderBy?: vocab_syn_tableOrderByWithRelationInput | vocab_syn_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vocab_syn_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_syn_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_syn_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vocab_syn_tables
    **/
    _count?: true | Vocab_syn_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vocab_syn_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vocab_syn_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vocab_syn_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vocab_syn_tableMaxAggregateInputType
  }

  export type GetVocab_syn_tableAggregateType<T extends Vocab_syn_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateVocab_syn_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocab_syn_table[P]>
      : GetScalarType<T[P], AggregateVocab_syn_table[P]>
  }




  export type vocab_syn_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vocab_syn_tableWhereInput
    orderBy?: vocab_syn_tableOrderByWithAggregationInput | vocab_syn_tableOrderByWithAggregationInput[]
    by: Vocab_syn_tableScalarFieldEnum[] | Vocab_syn_tableScalarFieldEnum
    having?: vocab_syn_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vocab_syn_tableCountAggregateInputType | true
    _avg?: Vocab_syn_tableAvgAggregateInputType
    _sum?: Vocab_syn_tableSumAggregateInputType
    _min?: Vocab_syn_tableMinAggregateInputType
    _max?: Vocab_syn_tableMaxAggregateInputType
  }

  export type Vocab_syn_tableGroupByOutputType = {
    word_id: number
    word_synonyms: string
    _count: Vocab_syn_tableCountAggregateOutputType | null
    _avg: Vocab_syn_tableAvgAggregateOutputType | null
    _sum: Vocab_syn_tableSumAggregateOutputType | null
    _min: Vocab_syn_tableMinAggregateOutputType | null
    _max: Vocab_syn_tableMaxAggregateOutputType | null
  }

  type GetVocab_syn_tableGroupByPayload<T extends vocab_syn_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vocab_syn_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vocab_syn_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vocab_syn_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Vocab_syn_tableGroupByOutputType[P]>
        }
      >
    >


  export type vocab_syn_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    word_id?: boolean
    word_synonyms?: boolean
    vocab_table?: boolean | vocab_tableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocab_syn_table"]>



  export type vocab_syn_tableSelectScalar = {
    word_id?: boolean
    word_synonyms?: boolean
  }

  export type vocab_syn_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"word_id" | "word_synonyms", ExtArgs["result"]["vocab_syn_table"]>
  export type vocab_syn_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocab_table?: boolean | vocab_tableDefaultArgs<ExtArgs>
  }

  export type $vocab_syn_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vocab_syn_table"
    objects: {
      vocab_table: Prisma.$vocab_tablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      word_id: number
      word_synonyms: string
    }, ExtArgs["result"]["vocab_syn_table"]>
    composites: {}
  }

  type vocab_syn_tableGetPayload<S extends boolean | null | undefined | vocab_syn_tableDefaultArgs> = $Result.GetResult<Prisma.$vocab_syn_tablePayload, S>

  type vocab_syn_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vocab_syn_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vocab_syn_tableCountAggregateInputType | true
    }

  export interface vocab_syn_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vocab_syn_table'], meta: { name: 'vocab_syn_table' } }
    /**
     * Find zero or one Vocab_syn_table that matches the filter.
     * @param {vocab_syn_tableFindUniqueArgs} args - Arguments to find a Vocab_syn_table
     * @example
     * // Get one Vocab_syn_table
     * const vocab_syn_table = await prisma.vocab_syn_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vocab_syn_tableFindUniqueArgs>(args: SelectSubset<T, vocab_syn_tableFindUniqueArgs<ExtArgs>>): Prisma__vocab_syn_tableClient<$Result.GetResult<Prisma.$vocab_syn_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vocab_syn_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vocab_syn_tableFindUniqueOrThrowArgs} args - Arguments to find a Vocab_syn_table
     * @example
     * // Get one Vocab_syn_table
     * const vocab_syn_table = await prisma.vocab_syn_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vocab_syn_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, vocab_syn_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vocab_syn_tableClient<$Result.GetResult<Prisma.$vocab_syn_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocab_syn_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_syn_tableFindFirstArgs} args - Arguments to find a Vocab_syn_table
     * @example
     * // Get one Vocab_syn_table
     * const vocab_syn_table = await prisma.vocab_syn_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vocab_syn_tableFindFirstArgs>(args?: SelectSubset<T, vocab_syn_tableFindFirstArgs<ExtArgs>>): Prisma__vocab_syn_tableClient<$Result.GetResult<Prisma.$vocab_syn_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocab_syn_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_syn_tableFindFirstOrThrowArgs} args - Arguments to find a Vocab_syn_table
     * @example
     * // Get one Vocab_syn_table
     * const vocab_syn_table = await prisma.vocab_syn_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vocab_syn_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, vocab_syn_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__vocab_syn_tableClient<$Result.GetResult<Prisma.$vocab_syn_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vocab_syn_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_syn_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vocab_syn_tables
     * const vocab_syn_tables = await prisma.vocab_syn_table.findMany()
     * 
     * // Get first 10 Vocab_syn_tables
     * const vocab_syn_tables = await prisma.vocab_syn_table.findMany({ take: 10 })
     * 
     * // Only select the `word_id`
     * const vocab_syn_tableWithWord_idOnly = await prisma.vocab_syn_table.findMany({ select: { word_id: true } })
     * 
     */
    findMany<T extends vocab_syn_tableFindManyArgs>(args?: SelectSubset<T, vocab_syn_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vocab_syn_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vocab_syn_table.
     * @param {vocab_syn_tableCreateArgs} args - Arguments to create a Vocab_syn_table.
     * @example
     * // Create one Vocab_syn_table
     * const Vocab_syn_table = await prisma.vocab_syn_table.create({
     *   data: {
     *     // ... data to create a Vocab_syn_table
     *   }
     * })
     * 
     */
    create<T extends vocab_syn_tableCreateArgs>(args: SelectSubset<T, vocab_syn_tableCreateArgs<ExtArgs>>): Prisma__vocab_syn_tableClient<$Result.GetResult<Prisma.$vocab_syn_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vocab_syn_tables.
     * @param {vocab_syn_tableCreateManyArgs} args - Arguments to create many Vocab_syn_tables.
     * @example
     * // Create many Vocab_syn_tables
     * const vocab_syn_table = await prisma.vocab_syn_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vocab_syn_tableCreateManyArgs>(args?: SelectSubset<T, vocab_syn_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vocab_syn_table.
     * @param {vocab_syn_tableDeleteArgs} args - Arguments to delete one Vocab_syn_table.
     * @example
     * // Delete one Vocab_syn_table
     * const Vocab_syn_table = await prisma.vocab_syn_table.delete({
     *   where: {
     *     // ... filter to delete one Vocab_syn_table
     *   }
     * })
     * 
     */
    delete<T extends vocab_syn_tableDeleteArgs>(args: SelectSubset<T, vocab_syn_tableDeleteArgs<ExtArgs>>): Prisma__vocab_syn_tableClient<$Result.GetResult<Prisma.$vocab_syn_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vocab_syn_table.
     * @param {vocab_syn_tableUpdateArgs} args - Arguments to update one Vocab_syn_table.
     * @example
     * // Update one Vocab_syn_table
     * const vocab_syn_table = await prisma.vocab_syn_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vocab_syn_tableUpdateArgs>(args: SelectSubset<T, vocab_syn_tableUpdateArgs<ExtArgs>>): Prisma__vocab_syn_tableClient<$Result.GetResult<Prisma.$vocab_syn_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vocab_syn_tables.
     * @param {vocab_syn_tableDeleteManyArgs} args - Arguments to filter Vocab_syn_tables to delete.
     * @example
     * // Delete a few Vocab_syn_tables
     * const { count } = await prisma.vocab_syn_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vocab_syn_tableDeleteManyArgs>(args?: SelectSubset<T, vocab_syn_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vocab_syn_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_syn_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vocab_syn_tables
     * const vocab_syn_table = await prisma.vocab_syn_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vocab_syn_tableUpdateManyArgs>(args: SelectSubset<T, vocab_syn_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vocab_syn_table.
     * @param {vocab_syn_tableUpsertArgs} args - Arguments to update or create a Vocab_syn_table.
     * @example
     * // Update or create a Vocab_syn_table
     * const vocab_syn_table = await prisma.vocab_syn_table.upsert({
     *   create: {
     *     // ... data to create a Vocab_syn_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vocab_syn_table we want to update
     *   }
     * })
     */
    upsert<T extends vocab_syn_tableUpsertArgs>(args: SelectSubset<T, vocab_syn_tableUpsertArgs<ExtArgs>>): Prisma__vocab_syn_tableClient<$Result.GetResult<Prisma.$vocab_syn_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vocab_syn_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_syn_tableCountArgs} args - Arguments to filter Vocab_syn_tables to count.
     * @example
     * // Count the number of Vocab_syn_tables
     * const count = await prisma.vocab_syn_table.count({
     *   where: {
     *     // ... the filter for the Vocab_syn_tables we want to count
     *   }
     * })
    **/
    count<T extends vocab_syn_tableCountArgs>(
      args?: Subset<T, vocab_syn_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vocab_syn_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vocab_syn_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vocab_syn_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Vocab_syn_tableAggregateArgs>(args: Subset<T, Vocab_syn_tableAggregateArgs>): Prisma.PrismaPromise<GetVocab_syn_tableAggregateType<T>>

    /**
     * Group by Vocab_syn_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_syn_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vocab_syn_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vocab_syn_tableGroupByArgs['orderBy'] }
        : { orderBy?: vocab_syn_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vocab_syn_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocab_syn_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vocab_syn_table model
   */
  readonly fields: vocab_syn_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vocab_syn_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vocab_syn_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vocab_table<T extends vocab_tableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, vocab_tableDefaultArgs<ExtArgs>>): Prisma__vocab_tableClient<$Result.GetResult<Prisma.$vocab_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vocab_syn_table model
   */
  interface vocab_syn_tableFieldRefs {
    readonly word_id: FieldRef<"vocab_syn_table", 'Int'>
    readonly word_synonyms: FieldRef<"vocab_syn_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vocab_syn_table findUnique
   */
  export type vocab_syn_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_syn_table
     */
    select?: vocab_syn_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_syn_table
     */
    omit?: vocab_syn_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_syn_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_syn_table to fetch.
     */
    where: vocab_syn_tableWhereUniqueInput
  }

  /**
   * vocab_syn_table findUniqueOrThrow
   */
  export type vocab_syn_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_syn_table
     */
    select?: vocab_syn_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_syn_table
     */
    omit?: vocab_syn_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_syn_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_syn_table to fetch.
     */
    where: vocab_syn_tableWhereUniqueInput
  }

  /**
   * vocab_syn_table findFirst
   */
  export type vocab_syn_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_syn_table
     */
    select?: vocab_syn_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_syn_table
     */
    omit?: vocab_syn_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_syn_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_syn_table to fetch.
     */
    where?: vocab_syn_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_syn_tables to fetch.
     */
    orderBy?: vocab_syn_tableOrderByWithRelationInput | vocab_syn_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocab_syn_tables.
     */
    cursor?: vocab_syn_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_syn_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_syn_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocab_syn_tables.
     */
    distinct?: Vocab_syn_tableScalarFieldEnum | Vocab_syn_tableScalarFieldEnum[]
  }

  /**
   * vocab_syn_table findFirstOrThrow
   */
  export type vocab_syn_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_syn_table
     */
    select?: vocab_syn_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_syn_table
     */
    omit?: vocab_syn_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_syn_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_syn_table to fetch.
     */
    where?: vocab_syn_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_syn_tables to fetch.
     */
    orderBy?: vocab_syn_tableOrderByWithRelationInput | vocab_syn_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocab_syn_tables.
     */
    cursor?: vocab_syn_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_syn_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_syn_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocab_syn_tables.
     */
    distinct?: Vocab_syn_tableScalarFieldEnum | Vocab_syn_tableScalarFieldEnum[]
  }

  /**
   * vocab_syn_table findMany
   */
  export type vocab_syn_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_syn_table
     */
    select?: vocab_syn_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_syn_table
     */
    omit?: vocab_syn_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_syn_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_syn_tables to fetch.
     */
    where?: vocab_syn_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_syn_tables to fetch.
     */
    orderBy?: vocab_syn_tableOrderByWithRelationInput | vocab_syn_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vocab_syn_tables.
     */
    cursor?: vocab_syn_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_syn_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_syn_tables.
     */
    skip?: number
    distinct?: Vocab_syn_tableScalarFieldEnum | Vocab_syn_tableScalarFieldEnum[]
  }

  /**
   * vocab_syn_table create
   */
  export type vocab_syn_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_syn_table
     */
    select?: vocab_syn_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_syn_table
     */
    omit?: vocab_syn_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_syn_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a vocab_syn_table.
     */
    data: XOR<vocab_syn_tableCreateInput, vocab_syn_tableUncheckedCreateInput>
  }

  /**
   * vocab_syn_table createMany
   */
  export type vocab_syn_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vocab_syn_tables.
     */
    data: vocab_syn_tableCreateManyInput | vocab_syn_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vocab_syn_table update
   */
  export type vocab_syn_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_syn_table
     */
    select?: vocab_syn_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_syn_table
     */
    omit?: vocab_syn_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_syn_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a vocab_syn_table.
     */
    data: XOR<vocab_syn_tableUpdateInput, vocab_syn_tableUncheckedUpdateInput>
    /**
     * Choose, which vocab_syn_table to update.
     */
    where: vocab_syn_tableWhereUniqueInput
  }

  /**
   * vocab_syn_table updateMany
   */
  export type vocab_syn_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vocab_syn_tables.
     */
    data: XOR<vocab_syn_tableUpdateManyMutationInput, vocab_syn_tableUncheckedUpdateManyInput>
    /**
     * Filter which vocab_syn_tables to update
     */
    where?: vocab_syn_tableWhereInput
    /**
     * Limit how many vocab_syn_tables to update.
     */
    limit?: number
  }

  /**
   * vocab_syn_table upsert
   */
  export type vocab_syn_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_syn_table
     */
    select?: vocab_syn_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_syn_table
     */
    omit?: vocab_syn_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_syn_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the vocab_syn_table to update in case it exists.
     */
    where: vocab_syn_tableWhereUniqueInput
    /**
     * In case the vocab_syn_table found by the `where` argument doesn't exist, create a new vocab_syn_table with this data.
     */
    create: XOR<vocab_syn_tableCreateInput, vocab_syn_tableUncheckedCreateInput>
    /**
     * In case the vocab_syn_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vocab_syn_tableUpdateInput, vocab_syn_tableUncheckedUpdateInput>
  }

  /**
   * vocab_syn_table delete
   */
  export type vocab_syn_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_syn_table
     */
    select?: vocab_syn_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_syn_table
     */
    omit?: vocab_syn_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_syn_tableInclude<ExtArgs> | null
    /**
     * Filter which vocab_syn_table to delete.
     */
    where: vocab_syn_tableWhereUniqueInput
  }

  /**
   * vocab_syn_table deleteMany
   */
  export type vocab_syn_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocab_syn_tables to delete
     */
    where?: vocab_syn_tableWhereInput
    /**
     * Limit how many vocab_syn_tables to delete.
     */
    limit?: number
  }

  /**
   * vocab_syn_table without action
   */
  export type vocab_syn_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_syn_table
     */
    select?: vocab_syn_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_syn_table
     */
    omit?: vocab_syn_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_syn_tableInclude<ExtArgs> | null
  }


  /**
   * Model vocab_table
   */

  export type AggregateVocab_table = {
    _count: Vocab_tableCountAggregateOutputType | null
    _avg: Vocab_tableAvgAggregateOutputType | null
    _sum: Vocab_tableSumAggregateOutputType | null
    _min: Vocab_tableMinAggregateOutputType | null
    _max: Vocab_tableMaxAggregateOutputType | null
  }

  export type Vocab_tableAvgAggregateOutputType = {
    word_id: number | null
  }

  export type Vocab_tableSumAggregateOutputType = {
    word_id: number | null
  }

  export type Vocab_tableMinAggregateOutputType = {
    word_id: number | null
    word_name: string | null
    word_type: string | null
    word_ipa: string | null
    word_voice: string | null
    word_topic: string | null
  }

  export type Vocab_tableMaxAggregateOutputType = {
    word_id: number | null
    word_name: string | null
    word_type: string | null
    word_ipa: string | null
    word_voice: string | null
    word_topic: string | null
  }

  export type Vocab_tableCountAggregateOutputType = {
    word_id: number
    word_name: number
    word_type: number
    word_ipa: number
    word_voice: number
    word_topic: number
    _all: number
  }


  export type Vocab_tableAvgAggregateInputType = {
    word_id?: true
  }

  export type Vocab_tableSumAggregateInputType = {
    word_id?: true
  }

  export type Vocab_tableMinAggregateInputType = {
    word_id?: true
    word_name?: true
    word_type?: true
    word_ipa?: true
    word_voice?: true
    word_topic?: true
  }

  export type Vocab_tableMaxAggregateInputType = {
    word_id?: true
    word_name?: true
    word_type?: true
    word_ipa?: true
    word_voice?: true
    word_topic?: true
  }

  export type Vocab_tableCountAggregateInputType = {
    word_id?: true
    word_name?: true
    word_type?: true
    word_ipa?: true
    word_voice?: true
    word_topic?: true
    _all?: true
  }

  export type Vocab_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocab_table to aggregate.
     */
    where?: vocab_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_tables to fetch.
     */
    orderBy?: vocab_tableOrderByWithRelationInput | vocab_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vocab_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vocab_tables
    **/
    _count?: true | Vocab_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vocab_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vocab_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vocab_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vocab_tableMaxAggregateInputType
  }

  export type GetVocab_tableAggregateType<T extends Vocab_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateVocab_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocab_table[P]>
      : GetScalarType<T[P], AggregateVocab_table[P]>
  }




  export type vocab_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vocab_tableWhereInput
    orderBy?: vocab_tableOrderByWithAggregationInput | vocab_tableOrderByWithAggregationInput[]
    by: Vocab_tableScalarFieldEnum[] | Vocab_tableScalarFieldEnum
    having?: vocab_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vocab_tableCountAggregateInputType | true
    _avg?: Vocab_tableAvgAggregateInputType
    _sum?: Vocab_tableSumAggregateInputType
    _min?: Vocab_tableMinAggregateInputType
    _max?: Vocab_tableMaxAggregateInputType
  }

  export type Vocab_tableGroupByOutputType = {
    word_id: number
    word_name: string
    word_type: string
    word_ipa: string | null
    word_voice: string | null
    word_topic: string | null
    _count: Vocab_tableCountAggregateOutputType | null
    _avg: Vocab_tableAvgAggregateOutputType | null
    _sum: Vocab_tableSumAggregateOutputType | null
    _min: Vocab_tableMinAggregateOutputType | null
    _max: Vocab_tableMaxAggregateOutputType | null
  }

  type GetVocab_tableGroupByPayload<T extends vocab_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vocab_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vocab_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vocab_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Vocab_tableGroupByOutputType[P]>
        }
      >
    >


  export type vocab_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    word_id?: boolean
    word_name?: boolean
    word_type?: boolean
    word_ipa?: boolean
    word_voice?: boolean
    word_topic?: boolean
    vocab_anto_table?: boolean | vocab_table$vocab_anto_tableArgs<ExtArgs>
    vocab_mean_table?: boolean | vocab_table$vocab_mean_tableArgs<ExtArgs>
    vocab_rela_table?: boolean | vocab_table$vocab_rela_tableArgs<ExtArgs>
    vocab_syn_table?: boolean | vocab_table$vocab_syn_tableArgs<ExtArgs>
    _count?: boolean | Vocab_tableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vocab_table"]>



  export type vocab_tableSelectScalar = {
    word_id?: boolean
    word_name?: boolean
    word_type?: boolean
    word_ipa?: boolean
    word_voice?: boolean
    word_topic?: boolean
  }

  export type vocab_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"word_id" | "word_name" | "word_type" | "word_ipa" | "word_voice" | "word_topic", ExtArgs["result"]["vocab_table"]>
  export type vocab_tableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vocab_anto_table?: boolean | vocab_table$vocab_anto_tableArgs<ExtArgs>
    vocab_mean_table?: boolean | vocab_table$vocab_mean_tableArgs<ExtArgs>
    vocab_rela_table?: boolean | vocab_table$vocab_rela_tableArgs<ExtArgs>
    vocab_syn_table?: boolean | vocab_table$vocab_syn_tableArgs<ExtArgs>
    _count?: boolean | Vocab_tableCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $vocab_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vocab_table"
    objects: {
      vocab_anto_table: Prisma.$vocab_anto_tablePayload<ExtArgs> | null
      vocab_mean_table: Prisma.$vocab_mean_tablePayload<ExtArgs>[]
      vocab_rela_table: Prisma.$vocab_rela_tablePayload<ExtArgs> | null
      vocab_syn_table: Prisma.$vocab_syn_tablePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      word_id: number
      word_name: string
      word_type: string
      word_ipa: string | null
      word_voice: string | null
      word_topic: string | null
    }, ExtArgs["result"]["vocab_table"]>
    composites: {}
  }

  type vocab_tableGetPayload<S extends boolean | null | undefined | vocab_tableDefaultArgs> = $Result.GetResult<Prisma.$vocab_tablePayload, S>

  type vocab_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vocab_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vocab_tableCountAggregateInputType | true
    }

  export interface vocab_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vocab_table'], meta: { name: 'vocab_table' } }
    /**
     * Find zero or one Vocab_table that matches the filter.
     * @param {vocab_tableFindUniqueArgs} args - Arguments to find a Vocab_table
     * @example
     * // Get one Vocab_table
     * const vocab_table = await prisma.vocab_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vocab_tableFindUniqueArgs>(args: SelectSubset<T, vocab_tableFindUniqueArgs<ExtArgs>>): Prisma__vocab_tableClient<$Result.GetResult<Prisma.$vocab_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vocab_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vocab_tableFindUniqueOrThrowArgs} args - Arguments to find a Vocab_table
     * @example
     * // Get one Vocab_table
     * const vocab_table = await prisma.vocab_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vocab_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, vocab_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vocab_tableClient<$Result.GetResult<Prisma.$vocab_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocab_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_tableFindFirstArgs} args - Arguments to find a Vocab_table
     * @example
     * // Get one Vocab_table
     * const vocab_table = await prisma.vocab_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vocab_tableFindFirstArgs>(args?: SelectSubset<T, vocab_tableFindFirstArgs<ExtArgs>>): Prisma__vocab_tableClient<$Result.GetResult<Prisma.$vocab_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocab_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_tableFindFirstOrThrowArgs} args - Arguments to find a Vocab_table
     * @example
     * // Get one Vocab_table
     * const vocab_table = await prisma.vocab_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vocab_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, vocab_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__vocab_tableClient<$Result.GetResult<Prisma.$vocab_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vocab_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vocab_tables
     * const vocab_tables = await prisma.vocab_table.findMany()
     * 
     * // Get first 10 Vocab_tables
     * const vocab_tables = await prisma.vocab_table.findMany({ take: 10 })
     * 
     * // Only select the `word_id`
     * const vocab_tableWithWord_idOnly = await prisma.vocab_table.findMany({ select: { word_id: true } })
     * 
     */
    findMany<T extends vocab_tableFindManyArgs>(args?: SelectSubset<T, vocab_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vocab_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vocab_table.
     * @param {vocab_tableCreateArgs} args - Arguments to create a Vocab_table.
     * @example
     * // Create one Vocab_table
     * const Vocab_table = await prisma.vocab_table.create({
     *   data: {
     *     // ... data to create a Vocab_table
     *   }
     * })
     * 
     */
    create<T extends vocab_tableCreateArgs>(args: SelectSubset<T, vocab_tableCreateArgs<ExtArgs>>): Prisma__vocab_tableClient<$Result.GetResult<Prisma.$vocab_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vocab_tables.
     * @param {vocab_tableCreateManyArgs} args - Arguments to create many Vocab_tables.
     * @example
     * // Create many Vocab_tables
     * const vocab_table = await prisma.vocab_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vocab_tableCreateManyArgs>(args?: SelectSubset<T, vocab_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vocab_table.
     * @param {vocab_tableDeleteArgs} args - Arguments to delete one Vocab_table.
     * @example
     * // Delete one Vocab_table
     * const Vocab_table = await prisma.vocab_table.delete({
     *   where: {
     *     // ... filter to delete one Vocab_table
     *   }
     * })
     * 
     */
    delete<T extends vocab_tableDeleteArgs>(args: SelectSubset<T, vocab_tableDeleteArgs<ExtArgs>>): Prisma__vocab_tableClient<$Result.GetResult<Prisma.$vocab_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vocab_table.
     * @param {vocab_tableUpdateArgs} args - Arguments to update one Vocab_table.
     * @example
     * // Update one Vocab_table
     * const vocab_table = await prisma.vocab_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vocab_tableUpdateArgs>(args: SelectSubset<T, vocab_tableUpdateArgs<ExtArgs>>): Prisma__vocab_tableClient<$Result.GetResult<Prisma.$vocab_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vocab_tables.
     * @param {vocab_tableDeleteManyArgs} args - Arguments to filter Vocab_tables to delete.
     * @example
     * // Delete a few Vocab_tables
     * const { count } = await prisma.vocab_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vocab_tableDeleteManyArgs>(args?: SelectSubset<T, vocab_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vocab_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vocab_tables
     * const vocab_table = await prisma.vocab_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vocab_tableUpdateManyArgs>(args: SelectSubset<T, vocab_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vocab_table.
     * @param {vocab_tableUpsertArgs} args - Arguments to update or create a Vocab_table.
     * @example
     * // Update or create a Vocab_table
     * const vocab_table = await prisma.vocab_table.upsert({
     *   create: {
     *     // ... data to create a Vocab_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vocab_table we want to update
     *   }
     * })
     */
    upsert<T extends vocab_tableUpsertArgs>(args: SelectSubset<T, vocab_tableUpsertArgs<ExtArgs>>): Prisma__vocab_tableClient<$Result.GetResult<Prisma.$vocab_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vocab_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_tableCountArgs} args - Arguments to filter Vocab_tables to count.
     * @example
     * // Count the number of Vocab_tables
     * const count = await prisma.vocab_table.count({
     *   where: {
     *     // ... the filter for the Vocab_tables we want to count
     *   }
     * })
    **/
    count<T extends vocab_tableCountArgs>(
      args?: Subset<T, vocab_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vocab_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vocab_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vocab_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Vocab_tableAggregateArgs>(args: Subset<T, Vocab_tableAggregateArgs>): Prisma.PrismaPromise<GetVocab_tableAggregateType<T>>

    /**
     * Group by Vocab_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vocab_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vocab_tableGroupByArgs['orderBy'] }
        : { orderBy?: vocab_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vocab_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocab_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vocab_table model
   */
  readonly fields: vocab_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vocab_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vocab_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vocab_anto_table<T extends vocab_table$vocab_anto_tableArgs<ExtArgs> = {}>(args?: Subset<T, vocab_table$vocab_anto_tableArgs<ExtArgs>>): Prisma__vocab_anto_tableClient<$Result.GetResult<Prisma.$vocab_anto_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vocab_mean_table<T extends vocab_table$vocab_mean_tableArgs<ExtArgs> = {}>(args?: Subset<T, vocab_table$vocab_mean_tableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vocab_mean_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vocab_rela_table<T extends vocab_table$vocab_rela_tableArgs<ExtArgs> = {}>(args?: Subset<T, vocab_table$vocab_rela_tableArgs<ExtArgs>>): Prisma__vocab_rela_tableClient<$Result.GetResult<Prisma.$vocab_rela_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vocab_syn_table<T extends vocab_table$vocab_syn_tableArgs<ExtArgs> = {}>(args?: Subset<T, vocab_table$vocab_syn_tableArgs<ExtArgs>>): Prisma__vocab_syn_tableClient<$Result.GetResult<Prisma.$vocab_syn_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vocab_table model
   */
  interface vocab_tableFieldRefs {
    readonly word_id: FieldRef<"vocab_table", 'Int'>
    readonly word_name: FieldRef<"vocab_table", 'String'>
    readonly word_type: FieldRef<"vocab_table", 'String'>
    readonly word_ipa: FieldRef<"vocab_table", 'String'>
    readonly word_voice: FieldRef<"vocab_table", 'String'>
    readonly word_topic: FieldRef<"vocab_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vocab_table findUnique
   */
  export type vocab_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_table
     */
    select?: vocab_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_table
     */
    omit?: vocab_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_table to fetch.
     */
    where: vocab_tableWhereUniqueInput
  }

  /**
   * vocab_table findUniqueOrThrow
   */
  export type vocab_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_table
     */
    select?: vocab_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_table
     */
    omit?: vocab_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_table to fetch.
     */
    where: vocab_tableWhereUniqueInput
  }

  /**
   * vocab_table findFirst
   */
  export type vocab_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_table
     */
    select?: vocab_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_table
     */
    omit?: vocab_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_table to fetch.
     */
    where?: vocab_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_tables to fetch.
     */
    orderBy?: vocab_tableOrderByWithRelationInput | vocab_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocab_tables.
     */
    cursor?: vocab_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocab_tables.
     */
    distinct?: Vocab_tableScalarFieldEnum | Vocab_tableScalarFieldEnum[]
  }

  /**
   * vocab_table findFirstOrThrow
   */
  export type vocab_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_table
     */
    select?: vocab_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_table
     */
    omit?: vocab_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_table to fetch.
     */
    where?: vocab_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_tables to fetch.
     */
    orderBy?: vocab_tableOrderByWithRelationInput | vocab_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocab_tables.
     */
    cursor?: vocab_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocab_tables.
     */
    distinct?: Vocab_tableScalarFieldEnum | Vocab_tableScalarFieldEnum[]
  }

  /**
   * vocab_table findMany
   */
  export type vocab_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_table
     */
    select?: vocab_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_table
     */
    omit?: vocab_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_tableInclude<ExtArgs> | null
    /**
     * Filter, which vocab_tables to fetch.
     */
    where?: vocab_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_tables to fetch.
     */
    orderBy?: vocab_tableOrderByWithRelationInput | vocab_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vocab_tables.
     */
    cursor?: vocab_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_tables.
     */
    skip?: number
    distinct?: Vocab_tableScalarFieldEnum | Vocab_tableScalarFieldEnum[]
  }

  /**
   * vocab_table create
   */
  export type vocab_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_table
     */
    select?: vocab_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_table
     */
    omit?: vocab_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_tableInclude<ExtArgs> | null
    /**
     * The data needed to create a vocab_table.
     */
    data: XOR<vocab_tableCreateInput, vocab_tableUncheckedCreateInput>
  }

  /**
   * vocab_table createMany
   */
  export type vocab_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vocab_tables.
     */
    data: vocab_tableCreateManyInput | vocab_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vocab_table update
   */
  export type vocab_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_table
     */
    select?: vocab_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_table
     */
    omit?: vocab_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_tableInclude<ExtArgs> | null
    /**
     * The data needed to update a vocab_table.
     */
    data: XOR<vocab_tableUpdateInput, vocab_tableUncheckedUpdateInput>
    /**
     * Choose, which vocab_table to update.
     */
    where: vocab_tableWhereUniqueInput
  }

  /**
   * vocab_table updateMany
   */
  export type vocab_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vocab_tables.
     */
    data: XOR<vocab_tableUpdateManyMutationInput, vocab_tableUncheckedUpdateManyInput>
    /**
     * Filter which vocab_tables to update
     */
    where?: vocab_tableWhereInput
    /**
     * Limit how many vocab_tables to update.
     */
    limit?: number
  }

  /**
   * vocab_table upsert
   */
  export type vocab_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_table
     */
    select?: vocab_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_table
     */
    omit?: vocab_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_tableInclude<ExtArgs> | null
    /**
     * The filter to search for the vocab_table to update in case it exists.
     */
    where: vocab_tableWhereUniqueInput
    /**
     * In case the vocab_table found by the `where` argument doesn't exist, create a new vocab_table with this data.
     */
    create: XOR<vocab_tableCreateInput, vocab_tableUncheckedCreateInput>
    /**
     * In case the vocab_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vocab_tableUpdateInput, vocab_tableUncheckedUpdateInput>
  }

  /**
   * vocab_table delete
   */
  export type vocab_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_table
     */
    select?: vocab_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_table
     */
    omit?: vocab_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_tableInclude<ExtArgs> | null
    /**
     * Filter which vocab_table to delete.
     */
    where: vocab_tableWhereUniqueInput
  }

  /**
   * vocab_table deleteMany
   */
  export type vocab_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocab_tables to delete
     */
    where?: vocab_tableWhereInput
    /**
     * Limit how many vocab_tables to delete.
     */
    limit?: number
  }

  /**
   * vocab_table.vocab_anto_table
   */
  export type vocab_table$vocab_anto_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_anto_table
     */
    select?: vocab_anto_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_anto_table
     */
    omit?: vocab_anto_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_anto_tableInclude<ExtArgs> | null
    where?: vocab_anto_tableWhereInput
  }

  /**
   * vocab_table.vocab_mean_table
   */
  export type vocab_table$vocab_mean_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_mean_table
     */
    select?: vocab_mean_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_mean_table
     */
    omit?: vocab_mean_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_mean_tableInclude<ExtArgs> | null
    where?: vocab_mean_tableWhereInput
    orderBy?: vocab_mean_tableOrderByWithRelationInput | vocab_mean_tableOrderByWithRelationInput[]
    cursor?: vocab_mean_tableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Vocab_mean_tableScalarFieldEnum | Vocab_mean_tableScalarFieldEnum[]
  }

  /**
   * vocab_table.vocab_rela_table
   */
  export type vocab_table$vocab_rela_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_rela_table
     */
    select?: vocab_rela_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_rela_table
     */
    omit?: vocab_rela_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_rela_tableInclude<ExtArgs> | null
    where?: vocab_rela_tableWhereInput
  }

  /**
   * vocab_table.vocab_syn_table
   */
  export type vocab_table$vocab_syn_tableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_syn_table
     */
    select?: vocab_syn_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_syn_table
     */
    omit?: vocab_syn_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_syn_tableInclude<ExtArgs> | null
    where?: vocab_syn_tableWhereInput
  }

  /**
   * vocab_table without action
   */
  export type vocab_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_table
     */
    select?: vocab_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_table
     */
    omit?: vocab_tableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: vocab_tableInclude<ExtArgs> | null
  }


  /**
   * Model vocab_topic_table
   */

  export type AggregateVocab_topic_table = {
    _count: Vocab_topic_tableCountAggregateOutputType | null
    _avg: Vocab_topic_tableAvgAggregateOutputType | null
    _sum: Vocab_topic_tableSumAggregateOutputType | null
    _min: Vocab_topic_tableMinAggregateOutputType | null
    _max: Vocab_topic_tableMaxAggregateOutputType | null
  }

  export type Vocab_topic_tableAvgAggregateOutputType = {
    topic_id: number | null
  }

  export type Vocab_topic_tableSumAggregateOutputType = {
    topic_id: number | null
  }

  export type Vocab_topic_tableMinAggregateOutputType = {
    topic_id: number | null
    topic_name: string | null
  }

  export type Vocab_topic_tableMaxAggregateOutputType = {
    topic_id: number | null
    topic_name: string | null
  }

  export type Vocab_topic_tableCountAggregateOutputType = {
    topic_id: number
    topic_name: number
    _all: number
  }


  export type Vocab_topic_tableAvgAggregateInputType = {
    topic_id?: true
  }

  export type Vocab_topic_tableSumAggregateInputType = {
    topic_id?: true
  }

  export type Vocab_topic_tableMinAggregateInputType = {
    topic_id?: true
    topic_name?: true
  }

  export type Vocab_topic_tableMaxAggregateInputType = {
    topic_id?: true
    topic_name?: true
  }

  export type Vocab_topic_tableCountAggregateInputType = {
    topic_id?: true
    topic_name?: true
    _all?: true
  }

  export type Vocab_topic_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocab_topic_table to aggregate.
     */
    where?: vocab_topic_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_topic_tables to fetch.
     */
    orderBy?: vocab_topic_tableOrderByWithRelationInput | vocab_topic_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vocab_topic_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_topic_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_topic_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vocab_topic_tables
    **/
    _count?: true | Vocab_topic_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vocab_topic_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vocab_topic_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vocab_topic_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vocab_topic_tableMaxAggregateInputType
  }

  export type GetVocab_topic_tableAggregateType<T extends Vocab_topic_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateVocab_topic_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocab_topic_table[P]>
      : GetScalarType<T[P], AggregateVocab_topic_table[P]>
  }




  export type vocab_topic_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vocab_topic_tableWhereInput
    orderBy?: vocab_topic_tableOrderByWithAggregationInput | vocab_topic_tableOrderByWithAggregationInput[]
    by: Vocab_topic_tableScalarFieldEnum[] | Vocab_topic_tableScalarFieldEnum
    having?: vocab_topic_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vocab_topic_tableCountAggregateInputType | true
    _avg?: Vocab_topic_tableAvgAggregateInputType
    _sum?: Vocab_topic_tableSumAggregateInputType
    _min?: Vocab_topic_tableMinAggregateInputType
    _max?: Vocab_topic_tableMaxAggregateInputType
  }

  export type Vocab_topic_tableGroupByOutputType = {
    topic_id: number
    topic_name: string
    _count: Vocab_topic_tableCountAggregateOutputType | null
    _avg: Vocab_topic_tableAvgAggregateOutputType | null
    _sum: Vocab_topic_tableSumAggregateOutputType | null
    _min: Vocab_topic_tableMinAggregateOutputType | null
    _max: Vocab_topic_tableMaxAggregateOutputType | null
  }

  type GetVocab_topic_tableGroupByPayload<T extends vocab_topic_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vocab_topic_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vocab_topic_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vocab_topic_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Vocab_topic_tableGroupByOutputType[P]>
        }
      >
    >


  export type vocab_topic_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    topic_id?: boolean
    topic_name?: boolean
  }, ExtArgs["result"]["vocab_topic_table"]>



  export type vocab_topic_tableSelectScalar = {
    topic_id?: boolean
    topic_name?: boolean
  }

  export type vocab_topic_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"topic_id" | "topic_name", ExtArgs["result"]["vocab_topic_table"]>

  export type $vocab_topic_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vocab_topic_table"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      topic_id: number
      topic_name: string
    }, ExtArgs["result"]["vocab_topic_table"]>
    composites: {}
  }

  type vocab_topic_tableGetPayload<S extends boolean | null | undefined | vocab_topic_tableDefaultArgs> = $Result.GetResult<Prisma.$vocab_topic_tablePayload, S>

  type vocab_topic_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vocab_topic_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vocab_topic_tableCountAggregateInputType | true
    }

  export interface vocab_topic_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vocab_topic_table'], meta: { name: 'vocab_topic_table' } }
    /**
     * Find zero or one Vocab_topic_table that matches the filter.
     * @param {vocab_topic_tableFindUniqueArgs} args - Arguments to find a Vocab_topic_table
     * @example
     * // Get one Vocab_topic_table
     * const vocab_topic_table = await prisma.vocab_topic_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vocab_topic_tableFindUniqueArgs>(args: SelectSubset<T, vocab_topic_tableFindUniqueArgs<ExtArgs>>): Prisma__vocab_topic_tableClient<$Result.GetResult<Prisma.$vocab_topic_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vocab_topic_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vocab_topic_tableFindUniqueOrThrowArgs} args - Arguments to find a Vocab_topic_table
     * @example
     * // Get one Vocab_topic_table
     * const vocab_topic_table = await prisma.vocab_topic_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vocab_topic_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, vocab_topic_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vocab_topic_tableClient<$Result.GetResult<Prisma.$vocab_topic_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocab_topic_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_topic_tableFindFirstArgs} args - Arguments to find a Vocab_topic_table
     * @example
     * // Get one Vocab_topic_table
     * const vocab_topic_table = await prisma.vocab_topic_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vocab_topic_tableFindFirstArgs>(args?: SelectSubset<T, vocab_topic_tableFindFirstArgs<ExtArgs>>): Prisma__vocab_topic_tableClient<$Result.GetResult<Prisma.$vocab_topic_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocab_topic_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_topic_tableFindFirstOrThrowArgs} args - Arguments to find a Vocab_topic_table
     * @example
     * // Get one Vocab_topic_table
     * const vocab_topic_table = await prisma.vocab_topic_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vocab_topic_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, vocab_topic_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__vocab_topic_tableClient<$Result.GetResult<Prisma.$vocab_topic_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vocab_topic_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_topic_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vocab_topic_tables
     * const vocab_topic_tables = await prisma.vocab_topic_table.findMany()
     * 
     * // Get first 10 Vocab_topic_tables
     * const vocab_topic_tables = await prisma.vocab_topic_table.findMany({ take: 10 })
     * 
     * // Only select the `topic_id`
     * const vocab_topic_tableWithTopic_idOnly = await prisma.vocab_topic_table.findMany({ select: { topic_id: true } })
     * 
     */
    findMany<T extends vocab_topic_tableFindManyArgs>(args?: SelectSubset<T, vocab_topic_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vocab_topic_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vocab_topic_table.
     * @param {vocab_topic_tableCreateArgs} args - Arguments to create a Vocab_topic_table.
     * @example
     * // Create one Vocab_topic_table
     * const Vocab_topic_table = await prisma.vocab_topic_table.create({
     *   data: {
     *     // ... data to create a Vocab_topic_table
     *   }
     * })
     * 
     */
    create<T extends vocab_topic_tableCreateArgs>(args: SelectSubset<T, vocab_topic_tableCreateArgs<ExtArgs>>): Prisma__vocab_topic_tableClient<$Result.GetResult<Prisma.$vocab_topic_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vocab_topic_tables.
     * @param {vocab_topic_tableCreateManyArgs} args - Arguments to create many Vocab_topic_tables.
     * @example
     * // Create many Vocab_topic_tables
     * const vocab_topic_table = await prisma.vocab_topic_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vocab_topic_tableCreateManyArgs>(args?: SelectSubset<T, vocab_topic_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vocab_topic_table.
     * @param {vocab_topic_tableDeleteArgs} args - Arguments to delete one Vocab_topic_table.
     * @example
     * // Delete one Vocab_topic_table
     * const Vocab_topic_table = await prisma.vocab_topic_table.delete({
     *   where: {
     *     // ... filter to delete one Vocab_topic_table
     *   }
     * })
     * 
     */
    delete<T extends vocab_topic_tableDeleteArgs>(args: SelectSubset<T, vocab_topic_tableDeleteArgs<ExtArgs>>): Prisma__vocab_topic_tableClient<$Result.GetResult<Prisma.$vocab_topic_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vocab_topic_table.
     * @param {vocab_topic_tableUpdateArgs} args - Arguments to update one Vocab_topic_table.
     * @example
     * // Update one Vocab_topic_table
     * const vocab_topic_table = await prisma.vocab_topic_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vocab_topic_tableUpdateArgs>(args: SelectSubset<T, vocab_topic_tableUpdateArgs<ExtArgs>>): Prisma__vocab_topic_tableClient<$Result.GetResult<Prisma.$vocab_topic_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vocab_topic_tables.
     * @param {vocab_topic_tableDeleteManyArgs} args - Arguments to filter Vocab_topic_tables to delete.
     * @example
     * // Delete a few Vocab_topic_tables
     * const { count } = await prisma.vocab_topic_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vocab_topic_tableDeleteManyArgs>(args?: SelectSubset<T, vocab_topic_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vocab_topic_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_topic_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vocab_topic_tables
     * const vocab_topic_table = await prisma.vocab_topic_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vocab_topic_tableUpdateManyArgs>(args: SelectSubset<T, vocab_topic_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vocab_topic_table.
     * @param {vocab_topic_tableUpsertArgs} args - Arguments to update or create a Vocab_topic_table.
     * @example
     * // Update or create a Vocab_topic_table
     * const vocab_topic_table = await prisma.vocab_topic_table.upsert({
     *   create: {
     *     // ... data to create a Vocab_topic_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vocab_topic_table we want to update
     *   }
     * })
     */
    upsert<T extends vocab_topic_tableUpsertArgs>(args: SelectSubset<T, vocab_topic_tableUpsertArgs<ExtArgs>>): Prisma__vocab_topic_tableClient<$Result.GetResult<Prisma.$vocab_topic_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vocab_topic_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_topic_tableCountArgs} args - Arguments to filter Vocab_topic_tables to count.
     * @example
     * // Count the number of Vocab_topic_tables
     * const count = await prisma.vocab_topic_table.count({
     *   where: {
     *     // ... the filter for the Vocab_topic_tables we want to count
     *   }
     * })
    **/
    count<T extends vocab_topic_tableCountArgs>(
      args?: Subset<T, vocab_topic_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vocab_topic_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vocab_topic_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vocab_topic_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Vocab_topic_tableAggregateArgs>(args: Subset<T, Vocab_topic_tableAggregateArgs>): Prisma.PrismaPromise<GetVocab_topic_tableAggregateType<T>>

    /**
     * Group by Vocab_topic_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_topic_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vocab_topic_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vocab_topic_tableGroupByArgs['orderBy'] }
        : { orderBy?: vocab_topic_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vocab_topic_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocab_topic_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vocab_topic_table model
   */
  readonly fields: vocab_topic_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vocab_topic_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vocab_topic_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vocab_topic_table model
   */
  interface vocab_topic_tableFieldRefs {
    readonly topic_id: FieldRef<"vocab_topic_table", 'Int'>
    readonly topic_name: FieldRef<"vocab_topic_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vocab_topic_table findUnique
   */
  export type vocab_topic_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_topic_table
     */
    select?: vocab_topic_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_topic_table
     */
    omit?: vocab_topic_tableOmit<ExtArgs> | null
    /**
     * Filter, which vocab_topic_table to fetch.
     */
    where: vocab_topic_tableWhereUniqueInput
  }

  /**
   * vocab_topic_table findUniqueOrThrow
   */
  export type vocab_topic_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_topic_table
     */
    select?: vocab_topic_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_topic_table
     */
    omit?: vocab_topic_tableOmit<ExtArgs> | null
    /**
     * Filter, which vocab_topic_table to fetch.
     */
    where: vocab_topic_tableWhereUniqueInput
  }

  /**
   * vocab_topic_table findFirst
   */
  export type vocab_topic_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_topic_table
     */
    select?: vocab_topic_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_topic_table
     */
    omit?: vocab_topic_tableOmit<ExtArgs> | null
    /**
     * Filter, which vocab_topic_table to fetch.
     */
    where?: vocab_topic_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_topic_tables to fetch.
     */
    orderBy?: vocab_topic_tableOrderByWithRelationInput | vocab_topic_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocab_topic_tables.
     */
    cursor?: vocab_topic_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_topic_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_topic_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocab_topic_tables.
     */
    distinct?: Vocab_topic_tableScalarFieldEnum | Vocab_topic_tableScalarFieldEnum[]
  }

  /**
   * vocab_topic_table findFirstOrThrow
   */
  export type vocab_topic_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_topic_table
     */
    select?: vocab_topic_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_topic_table
     */
    omit?: vocab_topic_tableOmit<ExtArgs> | null
    /**
     * Filter, which vocab_topic_table to fetch.
     */
    where?: vocab_topic_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_topic_tables to fetch.
     */
    orderBy?: vocab_topic_tableOrderByWithRelationInput | vocab_topic_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocab_topic_tables.
     */
    cursor?: vocab_topic_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_topic_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_topic_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocab_topic_tables.
     */
    distinct?: Vocab_topic_tableScalarFieldEnum | Vocab_topic_tableScalarFieldEnum[]
  }

  /**
   * vocab_topic_table findMany
   */
  export type vocab_topic_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_topic_table
     */
    select?: vocab_topic_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_topic_table
     */
    omit?: vocab_topic_tableOmit<ExtArgs> | null
    /**
     * Filter, which vocab_topic_tables to fetch.
     */
    where?: vocab_topic_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_topic_tables to fetch.
     */
    orderBy?: vocab_topic_tableOrderByWithRelationInput | vocab_topic_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vocab_topic_tables.
     */
    cursor?: vocab_topic_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_topic_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_topic_tables.
     */
    skip?: number
    distinct?: Vocab_topic_tableScalarFieldEnum | Vocab_topic_tableScalarFieldEnum[]
  }

  /**
   * vocab_topic_table create
   */
  export type vocab_topic_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_topic_table
     */
    select?: vocab_topic_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_topic_table
     */
    omit?: vocab_topic_tableOmit<ExtArgs> | null
    /**
     * The data needed to create a vocab_topic_table.
     */
    data: XOR<vocab_topic_tableCreateInput, vocab_topic_tableUncheckedCreateInput>
  }

  /**
   * vocab_topic_table createMany
   */
  export type vocab_topic_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vocab_topic_tables.
     */
    data: vocab_topic_tableCreateManyInput | vocab_topic_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vocab_topic_table update
   */
  export type vocab_topic_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_topic_table
     */
    select?: vocab_topic_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_topic_table
     */
    omit?: vocab_topic_tableOmit<ExtArgs> | null
    /**
     * The data needed to update a vocab_topic_table.
     */
    data: XOR<vocab_topic_tableUpdateInput, vocab_topic_tableUncheckedUpdateInput>
    /**
     * Choose, which vocab_topic_table to update.
     */
    where: vocab_topic_tableWhereUniqueInput
  }

  /**
   * vocab_topic_table updateMany
   */
  export type vocab_topic_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vocab_topic_tables.
     */
    data: XOR<vocab_topic_tableUpdateManyMutationInput, vocab_topic_tableUncheckedUpdateManyInput>
    /**
     * Filter which vocab_topic_tables to update
     */
    where?: vocab_topic_tableWhereInput
    /**
     * Limit how many vocab_topic_tables to update.
     */
    limit?: number
  }

  /**
   * vocab_topic_table upsert
   */
  export type vocab_topic_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_topic_table
     */
    select?: vocab_topic_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_topic_table
     */
    omit?: vocab_topic_tableOmit<ExtArgs> | null
    /**
     * The filter to search for the vocab_topic_table to update in case it exists.
     */
    where: vocab_topic_tableWhereUniqueInput
    /**
     * In case the vocab_topic_table found by the `where` argument doesn't exist, create a new vocab_topic_table with this data.
     */
    create: XOR<vocab_topic_tableCreateInput, vocab_topic_tableUncheckedCreateInput>
    /**
     * In case the vocab_topic_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vocab_topic_tableUpdateInput, vocab_topic_tableUncheckedUpdateInput>
  }

  /**
   * vocab_topic_table delete
   */
  export type vocab_topic_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_topic_table
     */
    select?: vocab_topic_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_topic_table
     */
    omit?: vocab_topic_tableOmit<ExtArgs> | null
    /**
     * Filter which vocab_topic_table to delete.
     */
    where: vocab_topic_tableWhereUniqueInput
  }

  /**
   * vocab_topic_table deleteMany
   */
  export type vocab_topic_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocab_topic_tables to delete
     */
    where?: vocab_topic_tableWhereInput
    /**
     * Limit how many vocab_topic_tables to delete.
     */
    limit?: number
  }

  /**
   * vocab_topic_table without action
   */
  export type vocab_topic_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_topic_table
     */
    select?: vocab_topic_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_topic_table
     */
    omit?: vocab_topic_tableOmit<ExtArgs> | null
  }


  /**
   * Model vocab_type_table
   */

  export type AggregateVocab_type_table = {
    _count: Vocab_type_tableCountAggregateOutputType | null
    _avg: Vocab_type_tableAvgAggregateOutputType | null
    _sum: Vocab_type_tableSumAggregateOutputType | null
    _min: Vocab_type_tableMinAggregateOutputType | null
    _max: Vocab_type_tableMaxAggregateOutputType | null
  }

  export type Vocab_type_tableAvgAggregateOutputType = {
    type_id: number | null
  }

  export type Vocab_type_tableSumAggregateOutputType = {
    type_id: number | null
  }

  export type Vocab_type_tableMinAggregateOutputType = {
    type_id: number | null
    type_symble: string | null
    type_name: string | null
  }

  export type Vocab_type_tableMaxAggregateOutputType = {
    type_id: number | null
    type_symble: string | null
    type_name: string | null
  }

  export type Vocab_type_tableCountAggregateOutputType = {
    type_id: number
    type_symble: number
    type_name: number
    _all: number
  }


  export type Vocab_type_tableAvgAggregateInputType = {
    type_id?: true
  }

  export type Vocab_type_tableSumAggregateInputType = {
    type_id?: true
  }

  export type Vocab_type_tableMinAggregateInputType = {
    type_id?: true
    type_symble?: true
    type_name?: true
  }

  export type Vocab_type_tableMaxAggregateInputType = {
    type_id?: true
    type_symble?: true
    type_name?: true
  }

  export type Vocab_type_tableCountAggregateInputType = {
    type_id?: true
    type_symble?: true
    type_name?: true
    _all?: true
  }

  export type Vocab_type_tableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocab_type_table to aggregate.
     */
    where?: vocab_type_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_type_tables to fetch.
     */
    orderBy?: vocab_type_tableOrderByWithRelationInput | vocab_type_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: vocab_type_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_type_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_type_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned vocab_type_tables
    **/
    _count?: true | Vocab_type_tableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Vocab_type_tableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Vocab_type_tableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Vocab_type_tableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Vocab_type_tableMaxAggregateInputType
  }

  export type GetVocab_type_tableAggregateType<T extends Vocab_type_tableAggregateArgs> = {
        [P in keyof T & keyof AggregateVocab_type_table]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVocab_type_table[P]>
      : GetScalarType<T[P], AggregateVocab_type_table[P]>
  }




  export type vocab_type_tableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: vocab_type_tableWhereInput
    orderBy?: vocab_type_tableOrderByWithAggregationInput | vocab_type_tableOrderByWithAggregationInput[]
    by: Vocab_type_tableScalarFieldEnum[] | Vocab_type_tableScalarFieldEnum
    having?: vocab_type_tableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Vocab_type_tableCountAggregateInputType | true
    _avg?: Vocab_type_tableAvgAggregateInputType
    _sum?: Vocab_type_tableSumAggregateInputType
    _min?: Vocab_type_tableMinAggregateInputType
    _max?: Vocab_type_tableMaxAggregateInputType
  }

  export type Vocab_type_tableGroupByOutputType = {
    type_id: number
    type_symble: string
    type_name: string
    _count: Vocab_type_tableCountAggregateOutputType | null
    _avg: Vocab_type_tableAvgAggregateOutputType | null
    _sum: Vocab_type_tableSumAggregateOutputType | null
    _min: Vocab_type_tableMinAggregateOutputType | null
    _max: Vocab_type_tableMaxAggregateOutputType | null
  }

  type GetVocab_type_tableGroupByPayload<T extends vocab_type_tableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Vocab_type_tableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Vocab_type_tableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Vocab_type_tableGroupByOutputType[P]>
            : GetScalarType<T[P], Vocab_type_tableGroupByOutputType[P]>
        }
      >
    >


  export type vocab_type_tableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type_id?: boolean
    type_symble?: boolean
    type_name?: boolean
  }, ExtArgs["result"]["vocab_type_table"]>



  export type vocab_type_tableSelectScalar = {
    type_id?: boolean
    type_symble?: boolean
    type_name?: boolean
  }

  export type vocab_type_tableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"type_id" | "type_symble" | "type_name", ExtArgs["result"]["vocab_type_table"]>

  export type $vocab_type_tablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "vocab_type_table"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      type_id: number
      type_symble: string
      type_name: string
    }, ExtArgs["result"]["vocab_type_table"]>
    composites: {}
  }

  type vocab_type_tableGetPayload<S extends boolean | null | undefined | vocab_type_tableDefaultArgs> = $Result.GetResult<Prisma.$vocab_type_tablePayload, S>

  type vocab_type_tableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<vocab_type_tableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Vocab_type_tableCountAggregateInputType | true
    }

  export interface vocab_type_tableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['vocab_type_table'], meta: { name: 'vocab_type_table' } }
    /**
     * Find zero or one Vocab_type_table that matches the filter.
     * @param {vocab_type_tableFindUniqueArgs} args - Arguments to find a Vocab_type_table
     * @example
     * // Get one Vocab_type_table
     * const vocab_type_table = await prisma.vocab_type_table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends vocab_type_tableFindUniqueArgs>(args: SelectSubset<T, vocab_type_tableFindUniqueArgs<ExtArgs>>): Prisma__vocab_type_tableClient<$Result.GetResult<Prisma.$vocab_type_tablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vocab_type_table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {vocab_type_tableFindUniqueOrThrowArgs} args - Arguments to find a Vocab_type_table
     * @example
     * // Get one Vocab_type_table
     * const vocab_type_table = await prisma.vocab_type_table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends vocab_type_tableFindUniqueOrThrowArgs>(args: SelectSubset<T, vocab_type_tableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__vocab_type_tableClient<$Result.GetResult<Prisma.$vocab_type_tablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocab_type_table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_type_tableFindFirstArgs} args - Arguments to find a Vocab_type_table
     * @example
     * // Get one Vocab_type_table
     * const vocab_type_table = await prisma.vocab_type_table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends vocab_type_tableFindFirstArgs>(args?: SelectSubset<T, vocab_type_tableFindFirstArgs<ExtArgs>>): Prisma__vocab_type_tableClient<$Result.GetResult<Prisma.$vocab_type_tablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vocab_type_table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_type_tableFindFirstOrThrowArgs} args - Arguments to find a Vocab_type_table
     * @example
     * // Get one Vocab_type_table
     * const vocab_type_table = await prisma.vocab_type_table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends vocab_type_tableFindFirstOrThrowArgs>(args?: SelectSubset<T, vocab_type_tableFindFirstOrThrowArgs<ExtArgs>>): Prisma__vocab_type_tableClient<$Result.GetResult<Prisma.$vocab_type_tablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vocab_type_tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_type_tableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vocab_type_tables
     * const vocab_type_tables = await prisma.vocab_type_table.findMany()
     * 
     * // Get first 10 Vocab_type_tables
     * const vocab_type_tables = await prisma.vocab_type_table.findMany({ take: 10 })
     * 
     * // Only select the `type_id`
     * const vocab_type_tableWithType_idOnly = await prisma.vocab_type_table.findMany({ select: { type_id: true } })
     * 
     */
    findMany<T extends vocab_type_tableFindManyArgs>(args?: SelectSubset<T, vocab_type_tableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$vocab_type_tablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vocab_type_table.
     * @param {vocab_type_tableCreateArgs} args - Arguments to create a Vocab_type_table.
     * @example
     * // Create one Vocab_type_table
     * const Vocab_type_table = await prisma.vocab_type_table.create({
     *   data: {
     *     // ... data to create a Vocab_type_table
     *   }
     * })
     * 
     */
    create<T extends vocab_type_tableCreateArgs>(args: SelectSubset<T, vocab_type_tableCreateArgs<ExtArgs>>): Prisma__vocab_type_tableClient<$Result.GetResult<Prisma.$vocab_type_tablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vocab_type_tables.
     * @param {vocab_type_tableCreateManyArgs} args - Arguments to create many Vocab_type_tables.
     * @example
     * // Create many Vocab_type_tables
     * const vocab_type_table = await prisma.vocab_type_table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends vocab_type_tableCreateManyArgs>(args?: SelectSubset<T, vocab_type_tableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vocab_type_table.
     * @param {vocab_type_tableDeleteArgs} args - Arguments to delete one Vocab_type_table.
     * @example
     * // Delete one Vocab_type_table
     * const Vocab_type_table = await prisma.vocab_type_table.delete({
     *   where: {
     *     // ... filter to delete one Vocab_type_table
     *   }
     * })
     * 
     */
    delete<T extends vocab_type_tableDeleteArgs>(args: SelectSubset<T, vocab_type_tableDeleteArgs<ExtArgs>>): Prisma__vocab_type_tableClient<$Result.GetResult<Prisma.$vocab_type_tablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vocab_type_table.
     * @param {vocab_type_tableUpdateArgs} args - Arguments to update one Vocab_type_table.
     * @example
     * // Update one Vocab_type_table
     * const vocab_type_table = await prisma.vocab_type_table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends vocab_type_tableUpdateArgs>(args: SelectSubset<T, vocab_type_tableUpdateArgs<ExtArgs>>): Prisma__vocab_type_tableClient<$Result.GetResult<Prisma.$vocab_type_tablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vocab_type_tables.
     * @param {vocab_type_tableDeleteManyArgs} args - Arguments to filter Vocab_type_tables to delete.
     * @example
     * // Delete a few Vocab_type_tables
     * const { count } = await prisma.vocab_type_table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends vocab_type_tableDeleteManyArgs>(args?: SelectSubset<T, vocab_type_tableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vocab_type_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_type_tableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vocab_type_tables
     * const vocab_type_table = await prisma.vocab_type_table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends vocab_type_tableUpdateManyArgs>(args: SelectSubset<T, vocab_type_tableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vocab_type_table.
     * @param {vocab_type_tableUpsertArgs} args - Arguments to update or create a Vocab_type_table.
     * @example
     * // Update or create a Vocab_type_table
     * const vocab_type_table = await prisma.vocab_type_table.upsert({
     *   create: {
     *     // ... data to create a Vocab_type_table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vocab_type_table we want to update
     *   }
     * })
     */
    upsert<T extends vocab_type_tableUpsertArgs>(args: SelectSubset<T, vocab_type_tableUpsertArgs<ExtArgs>>): Prisma__vocab_type_tableClient<$Result.GetResult<Prisma.$vocab_type_tablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vocab_type_tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_type_tableCountArgs} args - Arguments to filter Vocab_type_tables to count.
     * @example
     * // Count the number of Vocab_type_tables
     * const count = await prisma.vocab_type_table.count({
     *   where: {
     *     // ... the filter for the Vocab_type_tables we want to count
     *   }
     * })
    **/
    count<T extends vocab_type_tableCountArgs>(
      args?: Subset<T, vocab_type_tableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Vocab_type_tableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vocab_type_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Vocab_type_tableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Vocab_type_tableAggregateArgs>(args: Subset<T, Vocab_type_tableAggregateArgs>): Prisma.PrismaPromise<GetVocab_type_tableAggregateType<T>>

    /**
     * Group by Vocab_type_table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {vocab_type_tableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends vocab_type_tableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: vocab_type_tableGroupByArgs['orderBy'] }
        : { orderBy?: vocab_type_tableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, vocab_type_tableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVocab_type_tableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the vocab_type_table model
   */
  readonly fields: vocab_type_tableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for vocab_type_table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__vocab_type_tableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the vocab_type_table model
   */
  interface vocab_type_tableFieldRefs {
    readonly type_id: FieldRef<"vocab_type_table", 'Int'>
    readonly type_symble: FieldRef<"vocab_type_table", 'String'>
    readonly type_name: FieldRef<"vocab_type_table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * vocab_type_table findUnique
   */
  export type vocab_type_tableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_type_table
     */
    select?: vocab_type_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_type_table
     */
    omit?: vocab_type_tableOmit<ExtArgs> | null
    /**
     * Filter, which vocab_type_table to fetch.
     */
    where: vocab_type_tableWhereUniqueInput
  }

  /**
   * vocab_type_table findUniqueOrThrow
   */
  export type vocab_type_tableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_type_table
     */
    select?: vocab_type_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_type_table
     */
    omit?: vocab_type_tableOmit<ExtArgs> | null
    /**
     * Filter, which vocab_type_table to fetch.
     */
    where: vocab_type_tableWhereUniqueInput
  }

  /**
   * vocab_type_table findFirst
   */
  export type vocab_type_tableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_type_table
     */
    select?: vocab_type_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_type_table
     */
    omit?: vocab_type_tableOmit<ExtArgs> | null
    /**
     * Filter, which vocab_type_table to fetch.
     */
    where?: vocab_type_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_type_tables to fetch.
     */
    orderBy?: vocab_type_tableOrderByWithRelationInput | vocab_type_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocab_type_tables.
     */
    cursor?: vocab_type_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_type_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_type_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocab_type_tables.
     */
    distinct?: Vocab_type_tableScalarFieldEnum | Vocab_type_tableScalarFieldEnum[]
  }

  /**
   * vocab_type_table findFirstOrThrow
   */
  export type vocab_type_tableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_type_table
     */
    select?: vocab_type_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_type_table
     */
    omit?: vocab_type_tableOmit<ExtArgs> | null
    /**
     * Filter, which vocab_type_table to fetch.
     */
    where?: vocab_type_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_type_tables to fetch.
     */
    orderBy?: vocab_type_tableOrderByWithRelationInput | vocab_type_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for vocab_type_tables.
     */
    cursor?: vocab_type_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_type_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_type_tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of vocab_type_tables.
     */
    distinct?: Vocab_type_tableScalarFieldEnum | Vocab_type_tableScalarFieldEnum[]
  }

  /**
   * vocab_type_table findMany
   */
  export type vocab_type_tableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_type_table
     */
    select?: vocab_type_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_type_table
     */
    omit?: vocab_type_tableOmit<ExtArgs> | null
    /**
     * Filter, which vocab_type_tables to fetch.
     */
    where?: vocab_type_tableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of vocab_type_tables to fetch.
     */
    orderBy?: vocab_type_tableOrderByWithRelationInput | vocab_type_tableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing vocab_type_tables.
     */
    cursor?: vocab_type_tableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` vocab_type_tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` vocab_type_tables.
     */
    skip?: number
    distinct?: Vocab_type_tableScalarFieldEnum | Vocab_type_tableScalarFieldEnum[]
  }

  /**
   * vocab_type_table create
   */
  export type vocab_type_tableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_type_table
     */
    select?: vocab_type_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_type_table
     */
    omit?: vocab_type_tableOmit<ExtArgs> | null
    /**
     * The data needed to create a vocab_type_table.
     */
    data: XOR<vocab_type_tableCreateInput, vocab_type_tableUncheckedCreateInput>
  }

  /**
   * vocab_type_table createMany
   */
  export type vocab_type_tableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many vocab_type_tables.
     */
    data: vocab_type_tableCreateManyInput | vocab_type_tableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * vocab_type_table update
   */
  export type vocab_type_tableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_type_table
     */
    select?: vocab_type_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_type_table
     */
    omit?: vocab_type_tableOmit<ExtArgs> | null
    /**
     * The data needed to update a vocab_type_table.
     */
    data: XOR<vocab_type_tableUpdateInput, vocab_type_tableUncheckedUpdateInput>
    /**
     * Choose, which vocab_type_table to update.
     */
    where: vocab_type_tableWhereUniqueInput
  }

  /**
   * vocab_type_table updateMany
   */
  export type vocab_type_tableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update vocab_type_tables.
     */
    data: XOR<vocab_type_tableUpdateManyMutationInput, vocab_type_tableUncheckedUpdateManyInput>
    /**
     * Filter which vocab_type_tables to update
     */
    where?: vocab_type_tableWhereInput
    /**
     * Limit how many vocab_type_tables to update.
     */
    limit?: number
  }

  /**
   * vocab_type_table upsert
   */
  export type vocab_type_tableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_type_table
     */
    select?: vocab_type_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_type_table
     */
    omit?: vocab_type_tableOmit<ExtArgs> | null
    /**
     * The filter to search for the vocab_type_table to update in case it exists.
     */
    where: vocab_type_tableWhereUniqueInput
    /**
     * In case the vocab_type_table found by the `where` argument doesn't exist, create a new vocab_type_table with this data.
     */
    create: XOR<vocab_type_tableCreateInput, vocab_type_tableUncheckedCreateInput>
    /**
     * In case the vocab_type_table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<vocab_type_tableUpdateInput, vocab_type_tableUncheckedUpdateInput>
  }

  /**
   * vocab_type_table delete
   */
  export type vocab_type_tableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_type_table
     */
    select?: vocab_type_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_type_table
     */
    omit?: vocab_type_tableOmit<ExtArgs> | null
    /**
     * Filter which vocab_type_table to delete.
     */
    where: vocab_type_tableWhereUniqueInput
  }

  /**
   * vocab_type_table deleteMany
   */
  export type vocab_type_tableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which vocab_type_tables to delete
     */
    where?: vocab_type_tableWhereInput
    /**
     * Limit how many vocab_type_tables to delete.
     */
    limit?: number
  }

  /**
   * vocab_type_table without action
   */
  export type vocab_type_tableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the vocab_type_table
     */
    select?: vocab_type_tableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the vocab_type_table
     */
    omit?: vocab_type_tableOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Vocab_anto_tableScalarFieldEnum: {
    word_id: 'word_id',
    word_antonyms: 'word_antonyms'
  };

  export type Vocab_anto_tableScalarFieldEnum = (typeof Vocab_anto_tableScalarFieldEnum)[keyof typeof Vocab_anto_tableScalarFieldEnum]


  export const Vocab_mean_tableScalarFieldEnum: {
    mean_id: 'mean_id',
    word_id: 'word_id',
    word_meaning: 'word_meaning',
    word_example: 'word_example',
    word_image: 'word_image'
  };

  export type Vocab_mean_tableScalarFieldEnum = (typeof Vocab_mean_tableScalarFieldEnum)[keyof typeof Vocab_mean_tableScalarFieldEnum]


  export const Vocab_rela_tableScalarFieldEnum: {
    word_id: 'word_id',
    word_related_name: 'word_related_name'
  };

  export type Vocab_rela_tableScalarFieldEnum = (typeof Vocab_rela_tableScalarFieldEnum)[keyof typeof Vocab_rela_tableScalarFieldEnum]


  export const Vocab_syn_tableScalarFieldEnum: {
    word_id: 'word_id',
    word_synonyms: 'word_synonyms'
  };

  export type Vocab_syn_tableScalarFieldEnum = (typeof Vocab_syn_tableScalarFieldEnum)[keyof typeof Vocab_syn_tableScalarFieldEnum]


  export const Vocab_tableScalarFieldEnum: {
    word_id: 'word_id',
    word_name: 'word_name',
    word_type: 'word_type',
    word_ipa: 'word_ipa',
    word_voice: 'word_voice',
    word_topic: 'word_topic'
  };

  export type Vocab_tableScalarFieldEnum = (typeof Vocab_tableScalarFieldEnum)[keyof typeof Vocab_tableScalarFieldEnum]


  export const Vocab_topic_tableScalarFieldEnum: {
    topic_id: 'topic_id',
    topic_name: 'topic_name'
  };

  export type Vocab_topic_tableScalarFieldEnum = (typeof Vocab_topic_tableScalarFieldEnum)[keyof typeof Vocab_topic_tableScalarFieldEnum]


  export const Vocab_type_tableScalarFieldEnum: {
    type_id: 'type_id',
    type_symble: 'type_symble',
    type_name: 'type_name'
  };

  export type Vocab_type_tableScalarFieldEnum = (typeof Vocab_type_tableScalarFieldEnum)[keyof typeof Vocab_type_tableScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const vocab_anto_tableOrderByRelevanceFieldEnum: {
    word_antonyms: 'word_antonyms'
  };

  export type vocab_anto_tableOrderByRelevanceFieldEnum = (typeof vocab_anto_tableOrderByRelevanceFieldEnum)[keyof typeof vocab_anto_tableOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const vocab_mean_tableOrderByRelevanceFieldEnum: {
    word_meaning: 'word_meaning',
    word_example: 'word_example',
    word_image: 'word_image'
  };

  export type vocab_mean_tableOrderByRelevanceFieldEnum = (typeof vocab_mean_tableOrderByRelevanceFieldEnum)[keyof typeof vocab_mean_tableOrderByRelevanceFieldEnum]


  export const vocab_rela_tableOrderByRelevanceFieldEnum: {
    word_related_name: 'word_related_name'
  };

  export type vocab_rela_tableOrderByRelevanceFieldEnum = (typeof vocab_rela_tableOrderByRelevanceFieldEnum)[keyof typeof vocab_rela_tableOrderByRelevanceFieldEnum]


  export const vocab_syn_tableOrderByRelevanceFieldEnum: {
    word_synonyms: 'word_synonyms'
  };

  export type vocab_syn_tableOrderByRelevanceFieldEnum = (typeof vocab_syn_tableOrderByRelevanceFieldEnum)[keyof typeof vocab_syn_tableOrderByRelevanceFieldEnum]


  export const vocab_tableOrderByRelevanceFieldEnum: {
    word_name: 'word_name',
    word_type: 'word_type',
    word_ipa: 'word_ipa',
    word_voice: 'word_voice',
    word_topic: 'word_topic'
  };

  export type vocab_tableOrderByRelevanceFieldEnum = (typeof vocab_tableOrderByRelevanceFieldEnum)[keyof typeof vocab_tableOrderByRelevanceFieldEnum]


  export const vocab_topic_tableOrderByRelevanceFieldEnum: {
    topic_name: 'topic_name'
  };

  export type vocab_topic_tableOrderByRelevanceFieldEnum = (typeof vocab_topic_tableOrderByRelevanceFieldEnum)[keyof typeof vocab_topic_tableOrderByRelevanceFieldEnum]


  export const vocab_type_tableOrderByRelevanceFieldEnum: {
    type_symble: 'type_symble',
    type_name: 'type_name'
  };

  export type vocab_type_tableOrderByRelevanceFieldEnum = (typeof vocab_type_tableOrderByRelevanceFieldEnum)[keyof typeof vocab_type_tableOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type vocab_anto_tableWhereInput = {
    AND?: vocab_anto_tableWhereInput | vocab_anto_tableWhereInput[]
    OR?: vocab_anto_tableWhereInput[]
    NOT?: vocab_anto_tableWhereInput | vocab_anto_tableWhereInput[]
    word_id?: IntFilter<"vocab_anto_table"> | number
    word_antonyms?: StringFilter<"vocab_anto_table"> | string
    vocab_table?: XOR<Vocab_tableScalarRelationFilter, vocab_tableWhereInput>
  }

  export type vocab_anto_tableOrderByWithRelationInput = {
    word_id?: SortOrder
    word_antonyms?: SortOrder
    vocab_table?: vocab_tableOrderByWithRelationInput
    _relevance?: vocab_anto_tableOrderByRelevanceInput
  }

  export type vocab_anto_tableWhereUniqueInput = Prisma.AtLeast<{
    word_id?: number
    AND?: vocab_anto_tableWhereInput | vocab_anto_tableWhereInput[]
    OR?: vocab_anto_tableWhereInput[]
    NOT?: vocab_anto_tableWhereInput | vocab_anto_tableWhereInput[]
    word_antonyms?: StringFilter<"vocab_anto_table"> | string
    vocab_table?: XOR<Vocab_tableScalarRelationFilter, vocab_tableWhereInput>
  }, "word_id">

  export type vocab_anto_tableOrderByWithAggregationInput = {
    word_id?: SortOrder
    word_antonyms?: SortOrder
    _count?: vocab_anto_tableCountOrderByAggregateInput
    _avg?: vocab_anto_tableAvgOrderByAggregateInput
    _max?: vocab_anto_tableMaxOrderByAggregateInput
    _min?: vocab_anto_tableMinOrderByAggregateInput
    _sum?: vocab_anto_tableSumOrderByAggregateInput
  }

  export type vocab_anto_tableScalarWhereWithAggregatesInput = {
    AND?: vocab_anto_tableScalarWhereWithAggregatesInput | vocab_anto_tableScalarWhereWithAggregatesInput[]
    OR?: vocab_anto_tableScalarWhereWithAggregatesInput[]
    NOT?: vocab_anto_tableScalarWhereWithAggregatesInput | vocab_anto_tableScalarWhereWithAggregatesInput[]
    word_id?: IntWithAggregatesFilter<"vocab_anto_table"> | number
    word_antonyms?: StringWithAggregatesFilter<"vocab_anto_table"> | string
  }

  export type vocab_mean_tableWhereInput = {
    AND?: vocab_mean_tableWhereInput | vocab_mean_tableWhereInput[]
    OR?: vocab_mean_tableWhereInput[]
    NOT?: vocab_mean_tableWhereInput | vocab_mean_tableWhereInput[]
    mean_id?: IntFilter<"vocab_mean_table"> | number
    word_id?: IntFilter<"vocab_mean_table"> | number
    word_meaning?: StringFilter<"vocab_mean_table"> | string
    word_example?: StringNullableFilter<"vocab_mean_table"> | string | null
    word_image?: StringNullableFilter<"vocab_mean_table"> | string | null
    vocab_table?: XOR<Vocab_tableScalarRelationFilter, vocab_tableWhereInput>
  }

  export type vocab_mean_tableOrderByWithRelationInput = {
    mean_id?: SortOrder
    word_id?: SortOrder
    word_meaning?: SortOrder
    word_example?: SortOrderInput | SortOrder
    word_image?: SortOrderInput | SortOrder
    vocab_table?: vocab_tableOrderByWithRelationInput
    _relevance?: vocab_mean_tableOrderByRelevanceInput
  }

  export type vocab_mean_tableWhereUniqueInput = Prisma.AtLeast<{
    mean_id?: number
    AND?: vocab_mean_tableWhereInput | vocab_mean_tableWhereInput[]
    OR?: vocab_mean_tableWhereInput[]
    NOT?: vocab_mean_tableWhereInput | vocab_mean_tableWhereInput[]
    word_id?: IntFilter<"vocab_mean_table"> | number
    word_meaning?: StringFilter<"vocab_mean_table"> | string
    word_example?: StringNullableFilter<"vocab_mean_table"> | string | null
    word_image?: StringNullableFilter<"vocab_mean_table"> | string | null
    vocab_table?: XOR<Vocab_tableScalarRelationFilter, vocab_tableWhereInput>
  }, "mean_id">

  export type vocab_mean_tableOrderByWithAggregationInput = {
    mean_id?: SortOrder
    word_id?: SortOrder
    word_meaning?: SortOrder
    word_example?: SortOrderInput | SortOrder
    word_image?: SortOrderInput | SortOrder
    _count?: vocab_mean_tableCountOrderByAggregateInput
    _avg?: vocab_mean_tableAvgOrderByAggregateInput
    _max?: vocab_mean_tableMaxOrderByAggregateInput
    _min?: vocab_mean_tableMinOrderByAggregateInput
    _sum?: vocab_mean_tableSumOrderByAggregateInput
  }

  export type vocab_mean_tableScalarWhereWithAggregatesInput = {
    AND?: vocab_mean_tableScalarWhereWithAggregatesInput | vocab_mean_tableScalarWhereWithAggregatesInput[]
    OR?: vocab_mean_tableScalarWhereWithAggregatesInput[]
    NOT?: vocab_mean_tableScalarWhereWithAggregatesInput | vocab_mean_tableScalarWhereWithAggregatesInput[]
    mean_id?: IntWithAggregatesFilter<"vocab_mean_table"> | number
    word_id?: IntWithAggregatesFilter<"vocab_mean_table"> | number
    word_meaning?: StringWithAggregatesFilter<"vocab_mean_table"> | string
    word_example?: StringNullableWithAggregatesFilter<"vocab_mean_table"> | string | null
    word_image?: StringNullableWithAggregatesFilter<"vocab_mean_table"> | string | null
  }

  export type vocab_rela_tableWhereInput = {
    AND?: vocab_rela_tableWhereInput | vocab_rela_tableWhereInput[]
    OR?: vocab_rela_tableWhereInput[]
    NOT?: vocab_rela_tableWhereInput | vocab_rela_tableWhereInput[]
    word_id?: IntFilter<"vocab_rela_table"> | number
    word_related_name?: StringFilter<"vocab_rela_table"> | string
    vocab_table?: XOR<Vocab_tableScalarRelationFilter, vocab_tableWhereInput>
  }

  export type vocab_rela_tableOrderByWithRelationInput = {
    word_id?: SortOrder
    word_related_name?: SortOrder
    vocab_table?: vocab_tableOrderByWithRelationInput
    _relevance?: vocab_rela_tableOrderByRelevanceInput
  }

  export type vocab_rela_tableWhereUniqueInput = Prisma.AtLeast<{
    word_id?: number
    AND?: vocab_rela_tableWhereInput | vocab_rela_tableWhereInput[]
    OR?: vocab_rela_tableWhereInput[]
    NOT?: vocab_rela_tableWhereInput | vocab_rela_tableWhereInput[]
    word_related_name?: StringFilter<"vocab_rela_table"> | string
    vocab_table?: XOR<Vocab_tableScalarRelationFilter, vocab_tableWhereInput>
  }, "word_id">

  export type vocab_rela_tableOrderByWithAggregationInput = {
    word_id?: SortOrder
    word_related_name?: SortOrder
    _count?: vocab_rela_tableCountOrderByAggregateInput
    _avg?: vocab_rela_tableAvgOrderByAggregateInput
    _max?: vocab_rela_tableMaxOrderByAggregateInput
    _min?: vocab_rela_tableMinOrderByAggregateInput
    _sum?: vocab_rela_tableSumOrderByAggregateInput
  }

  export type vocab_rela_tableScalarWhereWithAggregatesInput = {
    AND?: vocab_rela_tableScalarWhereWithAggregatesInput | vocab_rela_tableScalarWhereWithAggregatesInput[]
    OR?: vocab_rela_tableScalarWhereWithAggregatesInput[]
    NOT?: vocab_rela_tableScalarWhereWithAggregatesInput | vocab_rela_tableScalarWhereWithAggregatesInput[]
    word_id?: IntWithAggregatesFilter<"vocab_rela_table"> | number
    word_related_name?: StringWithAggregatesFilter<"vocab_rela_table"> | string
  }

  export type vocab_syn_tableWhereInput = {
    AND?: vocab_syn_tableWhereInput | vocab_syn_tableWhereInput[]
    OR?: vocab_syn_tableWhereInput[]
    NOT?: vocab_syn_tableWhereInput | vocab_syn_tableWhereInput[]
    word_id?: IntFilter<"vocab_syn_table"> | number
    word_synonyms?: StringFilter<"vocab_syn_table"> | string
    vocab_table?: XOR<Vocab_tableScalarRelationFilter, vocab_tableWhereInput>
  }

  export type vocab_syn_tableOrderByWithRelationInput = {
    word_id?: SortOrder
    word_synonyms?: SortOrder
    vocab_table?: vocab_tableOrderByWithRelationInput
    _relevance?: vocab_syn_tableOrderByRelevanceInput
  }

  export type vocab_syn_tableWhereUniqueInput = Prisma.AtLeast<{
    word_id?: number
    AND?: vocab_syn_tableWhereInput | vocab_syn_tableWhereInput[]
    OR?: vocab_syn_tableWhereInput[]
    NOT?: vocab_syn_tableWhereInput | vocab_syn_tableWhereInput[]
    word_synonyms?: StringFilter<"vocab_syn_table"> | string
    vocab_table?: XOR<Vocab_tableScalarRelationFilter, vocab_tableWhereInput>
  }, "word_id">

  export type vocab_syn_tableOrderByWithAggregationInput = {
    word_id?: SortOrder
    word_synonyms?: SortOrder
    _count?: vocab_syn_tableCountOrderByAggregateInput
    _avg?: vocab_syn_tableAvgOrderByAggregateInput
    _max?: vocab_syn_tableMaxOrderByAggregateInput
    _min?: vocab_syn_tableMinOrderByAggregateInput
    _sum?: vocab_syn_tableSumOrderByAggregateInput
  }

  export type vocab_syn_tableScalarWhereWithAggregatesInput = {
    AND?: vocab_syn_tableScalarWhereWithAggregatesInput | vocab_syn_tableScalarWhereWithAggregatesInput[]
    OR?: vocab_syn_tableScalarWhereWithAggregatesInput[]
    NOT?: vocab_syn_tableScalarWhereWithAggregatesInput | vocab_syn_tableScalarWhereWithAggregatesInput[]
    word_id?: IntWithAggregatesFilter<"vocab_syn_table"> | number
    word_synonyms?: StringWithAggregatesFilter<"vocab_syn_table"> | string
  }

  export type vocab_tableWhereInput = {
    AND?: vocab_tableWhereInput | vocab_tableWhereInput[]
    OR?: vocab_tableWhereInput[]
    NOT?: vocab_tableWhereInput | vocab_tableWhereInput[]
    word_id?: IntFilter<"vocab_table"> | number
    word_name?: StringFilter<"vocab_table"> | string
    word_type?: StringFilter<"vocab_table"> | string
    word_ipa?: StringNullableFilter<"vocab_table"> | string | null
    word_voice?: StringNullableFilter<"vocab_table"> | string | null
    word_topic?: StringNullableFilter<"vocab_table"> | string | null
    vocab_anto_table?: XOR<Vocab_anto_tableNullableScalarRelationFilter, vocab_anto_tableWhereInput> | null
    vocab_mean_table?: Vocab_mean_tableListRelationFilter
    vocab_rela_table?: XOR<Vocab_rela_tableNullableScalarRelationFilter, vocab_rela_tableWhereInput> | null
    vocab_syn_table?: XOR<Vocab_syn_tableNullableScalarRelationFilter, vocab_syn_tableWhereInput> | null
  }

  export type vocab_tableOrderByWithRelationInput = {
    word_id?: SortOrder
    word_name?: SortOrder
    word_type?: SortOrder
    word_ipa?: SortOrderInput | SortOrder
    word_voice?: SortOrderInput | SortOrder
    word_topic?: SortOrderInput | SortOrder
    vocab_anto_table?: vocab_anto_tableOrderByWithRelationInput
    vocab_mean_table?: vocab_mean_tableOrderByRelationAggregateInput
    vocab_rela_table?: vocab_rela_tableOrderByWithRelationInput
    vocab_syn_table?: vocab_syn_tableOrderByWithRelationInput
    _relevance?: vocab_tableOrderByRelevanceInput
  }

  export type vocab_tableWhereUniqueInput = Prisma.AtLeast<{
    word_id?: number
    AND?: vocab_tableWhereInput | vocab_tableWhereInput[]
    OR?: vocab_tableWhereInput[]
    NOT?: vocab_tableWhereInput | vocab_tableWhereInput[]
    word_name?: StringFilter<"vocab_table"> | string
    word_type?: StringFilter<"vocab_table"> | string
    word_ipa?: StringNullableFilter<"vocab_table"> | string | null
    word_voice?: StringNullableFilter<"vocab_table"> | string | null
    word_topic?: StringNullableFilter<"vocab_table"> | string | null
    vocab_anto_table?: XOR<Vocab_anto_tableNullableScalarRelationFilter, vocab_anto_tableWhereInput> | null
    vocab_mean_table?: Vocab_mean_tableListRelationFilter
    vocab_rela_table?: XOR<Vocab_rela_tableNullableScalarRelationFilter, vocab_rela_tableWhereInput> | null
    vocab_syn_table?: XOR<Vocab_syn_tableNullableScalarRelationFilter, vocab_syn_tableWhereInput> | null
  }, "word_id">

  export type vocab_tableOrderByWithAggregationInput = {
    word_id?: SortOrder
    word_name?: SortOrder
    word_type?: SortOrder
    word_ipa?: SortOrderInput | SortOrder
    word_voice?: SortOrderInput | SortOrder
    word_topic?: SortOrderInput | SortOrder
    _count?: vocab_tableCountOrderByAggregateInput
    _avg?: vocab_tableAvgOrderByAggregateInput
    _max?: vocab_tableMaxOrderByAggregateInput
    _min?: vocab_tableMinOrderByAggregateInput
    _sum?: vocab_tableSumOrderByAggregateInput
  }

  export type vocab_tableScalarWhereWithAggregatesInput = {
    AND?: vocab_tableScalarWhereWithAggregatesInput | vocab_tableScalarWhereWithAggregatesInput[]
    OR?: vocab_tableScalarWhereWithAggregatesInput[]
    NOT?: vocab_tableScalarWhereWithAggregatesInput | vocab_tableScalarWhereWithAggregatesInput[]
    word_id?: IntWithAggregatesFilter<"vocab_table"> | number
    word_name?: StringWithAggregatesFilter<"vocab_table"> | string
    word_type?: StringWithAggregatesFilter<"vocab_table"> | string
    word_ipa?: StringNullableWithAggregatesFilter<"vocab_table"> | string | null
    word_voice?: StringNullableWithAggregatesFilter<"vocab_table"> | string | null
    word_topic?: StringNullableWithAggregatesFilter<"vocab_table"> | string | null
  }

  export type vocab_topic_tableWhereInput = {
    AND?: vocab_topic_tableWhereInput | vocab_topic_tableWhereInput[]
    OR?: vocab_topic_tableWhereInput[]
    NOT?: vocab_topic_tableWhereInput | vocab_topic_tableWhereInput[]
    topic_id?: IntFilter<"vocab_topic_table"> | number
    topic_name?: StringFilter<"vocab_topic_table"> | string
  }

  export type vocab_topic_tableOrderByWithRelationInput = {
    topic_id?: SortOrder
    topic_name?: SortOrder
    _relevance?: vocab_topic_tableOrderByRelevanceInput
  }

  export type vocab_topic_tableWhereUniqueInput = Prisma.AtLeast<{
    topic_id?: number
    AND?: vocab_topic_tableWhereInput | vocab_topic_tableWhereInput[]
    OR?: vocab_topic_tableWhereInput[]
    NOT?: vocab_topic_tableWhereInput | vocab_topic_tableWhereInput[]
    topic_name?: StringFilter<"vocab_topic_table"> | string
  }, "topic_id">

  export type vocab_topic_tableOrderByWithAggregationInput = {
    topic_id?: SortOrder
    topic_name?: SortOrder
    _count?: vocab_topic_tableCountOrderByAggregateInput
    _avg?: vocab_topic_tableAvgOrderByAggregateInput
    _max?: vocab_topic_tableMaxOrderByAggregateInput
    _min?: vocab_topic_tableMinOrderByAggregateInput
    _sum?: vocab_topic_tableSumOrderByAggregateInput
  }

  export type vocab_topic_tableScalarWhereWithAggregatesInput = {
    AND?: vocab_topic_tableScalarWhereWithAggregatesInput | vocab_topic_tableScalarWhereWithAggregatesInput[]
    OR?: vocab_topic_tableScalarWhereWithAggregatesInput[]
    NOT?: vocab_topic_tableScalarWhereWithAggregatesInput | vocab_topic_tableScalarWhereWithAggregatesInput[]
    topic_id?: IntWithAggregatesFilter<"vocab_topic_table"> | number
    topic_name?: StringWithAggregatesFilter<"vocab_topic_table"> | string
  }

  export type vocab_type_tableWhereInput = {
    AND?: vocab_type_tableWhereInput | vocab_type_tableWhereInput[]
    OR?: vocab_type_tableWhereInput[]
    NOT?: vocab_type_tableWhereInput | vocab_type_tableWhereInput[]
    type_id?: IntFilter<"vocab_type_table"> | number
    type_symble?: StringFilter<"vocab_type_table"> | string
    type_name?: StringFilter<"vocab_type_table"> | string
  }

  export type vocab_type_tableOrderByWithRelationInput = {
    type_id?: SortOrder
    type_symble?: SortOrder
    type_name?: SortOrder
    _relevance?: vocab_type_tableOrderByRelevanceInput
  }

  export type vocab_type_tableWhereUniqueInput = Prisma.AtLeast<{
    type_id?: number
    AND?: vocab_type_tableWhereInput | vocab_type_tableWhereInput[]
    OR?: vocab_type_tableWhereInput[]
    NOT?: vocab_type_tableWhereInput | vocab_type_tableWhereInput[]
    type_symble?: StringFilter<"vocab_type_table"> | string
    type_name?: StringFilter<"vocab_type_table"> | string
  }, "type_id">

  export type vocab_type_tableOrderByWithAggregationInput = {
    type_id?: SortOrder
    type_symble?: SortOrder
    type_name?: SortOrder
    _count?: vocab_type_tableCountOrderByAggregateInput
    _avg?: vocab_type_tableAvgOrderByAggregateInput
    _max?: vocab_type_tableMaxOrderByAggregateInput
    _min?: vocab_type_tableMinOrderByAggregateInput
    _sum?: vocab_type_tableSumOrderByAggregateInput
  }

  export type vocab_type_tableScalarWhereWithAggregatesInput = {
    AND?: vocab_type_tableScalarWhereWithAggregatesInput | vocab_type_tableScalarWhereWithAggregatesInput[]
    OR?: vocab_type_tableScalarWhereWithAggregatesInput[]
    NOT?: vocab_type_tableScalarWhereWithAggregatesInput | vocab_type_tableScalarWhereWithAggregatesInput[]
    type_id?: IntWithAggregatesFilter<"vocab_type_table"> | number
    type_symble?: StringWithAggregatesFilter<"vocab_type_table"> | string
    type_name?: StringWithAggregatesFilter<"vocab_type_table"> | string
  }

  export type vocab_anto_tableCreateInput = {
    word_antonyms: string
    vocab_table?: vocab_tableCreateNestedOneWithoutVocab_anto_tableInput
  }

  export type vocab_anto_tableUncheckedCreateInput = {
    word_id?: number
    word_antonyms: string
  }

  export type vocab_anto_tableUpdateInput = {
    word_antonyms?: StringFieldUpdateOperationsInput | string
    vocab_table?: vocab_tableUpdateOneRequiredWithoutVocab_anto_tableNestedInput
  }

  export type vocab_anto_tableUncheckedUpdateInput = {
    word_id?: IntFieldUpdateOperationsInput | number
    word_antonyms?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_anto_tableCreateManyInput = {
    word_id?: number
    word_antonyms: string
  }

  export type vocab_anto_tableUpdateManyMutationInput = {
    word_antonyms?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_anto_tableUncheckedUpdateManyInput = {
    word_id?: IntFieldUpdateOperationsInput | number
    word_antonyms?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_mean_tableCreateInput = {
    word_meaning: string
    word_example?: string | null
    word_image?: string | null
    vocab_table: vocab_tableCreateNestedOneWithoutVocab_mean_tableInput
  }

  export type vocab_mean_tableUncheckedCreateInput = {
    mean_id?: number
    word_id: number
    word_meaning: string
    word_example?: string | null
    word_image?: string | null
  }

  export type vocab_mean_tableUpdateInput = {
    word_meaning?: StringFieldUpdateOperationsInput | string
    word_example?: NullableStringFieldUpdateOperationsInput | string | null
    word_image?: NullableStringFieldUpdateOperationsInput | string | null
    vocab_table?: vocab_tableUpdateOneRequiredWithoutVocab_mean_tableNestedInput
  }

  export type vocab_mean_tableUncheckedUpdateInput = {
    mean_id?: IntFieldUpdateOperationsInput | number
    word_id?: IntFieldUpdateOperationsInput | number
    word_meaning?: StringFieldUpdateOperationsInput | string
    word_example?: NullableStringFieldUpdateOperationsInput | string | null
    word_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vocab_mean_tableCreateManyInput = {
    mean_id?: number
    word_id: number
    word_meaning: string
    word_example?: string | null
    word_image?: string | null
  }

  export type vocab_mean_tableUpdateManyMutationInput = {
    word_meaning?: StringFieldUpdateOperationsInput | string
    word_example?: NullableStringFieldUpdateOperationsInput | string | null
    word_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vocab_mean_tableUncheckedUpdateManyInput = {
    mean_id?: IntFieldUpdateOperationsInput | number
    word_id?: IntFieldUpdateOperationsInput | number
    word_meaning?: StringFieldUpdateOperationsInput | string
    word_example?: NullableStringFieldUpdateOperationsInput | string | null
    word_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vocab_rela_tableCreateInput = {
    word_related_name: string
    vocab_table?: vocab_tableCreateNestedOneWithoutVocab_rela_tableInput
  }

  export type vocab_rela_tableUncheckedCreateInput = {
    word_id?: number
    word_related_name: string
  }

  export type vocab_rela_tableUpdateInput = {
    word_related_name?: StringFieldUpdateOperationsInput | string
    vocab_table?: vocab_tableUpdateOneRequiredWithoutVocab_rela_tableNestedInput
  }

  export type vocab_rela_tableUncheckedUpdateInput = {
    word_id?: IntFieldUpdateOperationsInput | number
    word_related_name?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_rela_tableCreateManyInput = {
    word_id?: number
    word_related_name: string
  }

  export type vocab_rela_tableUpdateManyMutationInput = {
    word_related_name?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_rela_tableUncheckedUpdateManyInput = {
    word_id?: IntFieldUpdateOperationsInput | number
    word_related_name?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_syn_tableCreateInput = {
    word_synonyms: string
    vocab_table?: vocab_tableCreateNestedOneWithoutVocab_syn_tableInput
  }

  export type vocab_syn_tableUncheckedCreateInput = {
    word_id?: number
    word_synonyms: string
  }

  export type vocab_syn_tableUpdateInput = {
    word_synonyms?: StringFieldUpdateOperationsInput | string
    vocab_table?: vocab_tableUpdateOneRequiredWithoutVocab_syn_tableNestedInput
  }

  export type vocab_syn_tableUncheckedUpdateInput = {
    word_id?: IntFieldUpdateOperationsInput | number
    word_synonyms?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_syn_tableCreateManyInput = {
    word_id?: number
    word_synonyms: string
  }

  export type vocab_syn_tableUpdateManyMutationInput = {
    word_synonyms?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_syn_tableUncheckedUpdateManyInput = {
    word_id?: IntFieldUpdateOperationsInput | number
    word_synonyms?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_tableCreateInput = {
    word_name: string
    word_type: string
    word_ipa?: string | null
    word_voice?: string | null
    word_topic?: string | null
    vocab_anto_table?: vocab_anto_tableCreateNestedOneWithoutVocab_tableInput
    vocab_mean_table?: vocab_mean_tableCreateNestedManyWithoutVocab_tableInput
    vocab_rela_table?: vocab_rela_tableCreateNestedOneWithoutVocab_tableInput
    vocab_syn_table?: vocab_syn_tableCreateNestedOneWithoutVocab_tableInput
  }

  export type vocab_tableUncheckedCreateInput = {
    word_id?: number
    word_name: string
    word_type: string
    word_ipa?: string | null
    word_voice?: string | null
    word_topic?: string | null
    vocab_anto_table?: vocab_anto_tableUncheckedCreateNestedOneWithoutVocab_tableInput
    vocab_mean_table?: vocab_mean_tableUncheckedCreateNestedManyWithoutVocab_tableInput
    vocab_rela_table?: vocab_rela_tableUncheckedCreateNestedOneWithoutVocab_tableInput
    vocab_syn_table?: vocab_syn_tableUncheckedCreateNestedOneWithoutVocab_tableInput
  }

  export type vocab_tableUpdateInput = {
    word_name?: StringFieldUpdateOperationsInput | string
    word_type?: StringFieldUpdateOperationsInput | string
    word_ipa?: NullableStringFieldUpdateOperationsInput | string | null
    word_voice?: NullableStringFieldUpdateOperationsInput | string | null
    word_topic?: NullableStringFieldUpdateOperationsInput | string | null
    vocab_anto_table?: vocab_anto_tableUpdateOneWithoutVocab_tableNestedInput
    vocab_mean_table?: vocab_mean_tableUpdateManyWithoutVocab_tableNestedInput
    vocab_rela_table?: vocab_rela_tableUpdateOneWithoutVocab_tableNestedInput
    vocab_syn_table?: vocab_syn_tableUpdateOneWithoutVocab_tableNestedInput
  }

  export type vocab_tableUncheckedUpdateInput = {
    word_id?: IntFieldUpdateOperationsInput | number
    word_name?: StringFieldUpdateOperationsInput | string
    word_type?: StringFieldUpdateOperationsInput | string
    word_ipa?: NullableStringFieldUpdateOperationsInput | string | null
    word_voice?: NullableStringFieldUpdateOperationsInput | string | null
    word_topic?: NullableStringFieldUpdateOperationsInput | string | null
    vocab_anto_table?: vocab_anto_tableUncheckedUpdateOneWithoutVocab_tableNestedInput
    vocab_mean_table?: vocab_mean_tableUncheckedUpdateManyWithoutVocab_tableNestedInput
    vocab_rela_table?: vocab_rela_tableUncheckedUpdateOneWithoutVocab_tableNestedInput
    vocab_syn_table?: vocab_syn_tableUncheckedUpdateOneWithoutVocab_tableNestedInput
  }

  export type vocab_tableCreateManyInput = {
    word_id?: number
    word_name: string
    word_type: string
    word_ipa?: string | null
    word_voice?: string | null
    word_topic?: string | null
  }

  export type vocab_tableUpdateManyMutationInput = {
    word_name?: StringFieldUpdateOperationsInput | string
    word_type?: StringFieldUpdateOperationsInput | string
    word_ipa?: NullableStringFieldUpdateOperationsInput | string | null
    word_voice?: NullableStringFieldUpdateOperationsInput | string | null
    word_topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vocab_tableUncheckedUpdateManyInput = {
    word_id?: IntFieldUpdateOperationsInput | number
    word_name?: StringFieldUpdateOperationsInput | string
    word_type?: StringFieldUpdateOperationsInput | string
    word_ipa?: NullableStringFieldUpdateOperationsInput | string | null
    word_voice?: NullableStringFieldUpdateOperationsInput | string | null
    word_topic?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vocab_topic_tableCreateInput = {
    topic_name: string
  }

  export type vocab_topic_tableUncheckedCreateInput = {
    topic_id?: number
    topic_name: string
  }

  export type vocab_topic_tableUpdateInput = {
    topic_name?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_topic_tableUncheckedUpdateInput = {
    topic_id?: IntFieldUpdateOperationsInput | number
    topic_name?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_topic_tableCreateManyInput = {
    topic_id?: number
    topic_name: string
  }

  export type vocab_topic_tableUpdateManyMutationInput = {
    topic_name?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_topic_tableUncheckedUpdateManyInput = {
    topic_id?: IntFieldUpdateOperationsInput | number
    topic_name?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_type_tableCreateInput = {
    type_symble: string
    type_name: string
  }

  export type vocab_type_tableUncheckedCreateInput = {
    type_id?: number
    type_symble: string
    type_name: string
  }

  export type vocab_type_tableUpdateInput = {
    type_symble?: StringFieldUpdateOperationsInput | string
    type_name?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_type_tableUncheckedUpdateInput = {
    type_id?: IntFieldUpdateOperationsInput | number
    type_symble?: StringFieldUpdateOperationsInput | string
    type_name?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_type_tableCreateManyInput = {
    type_id?: number
    type_symble: string
    type_name: string
  }

  export type vocab_type_tableUpdateManyMutationInput = {
    type_symble?: StringFieldUpdateOperationsInput | string
    type_name?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_type_tableUncheckedUpdateManyInput = {
    type_id?: IntFieldUpdateOperationsInput | number
    type_symble?: StringFieldUpdateOperationsInput | string
    type_name?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Vocab_tableScalarRelationFilter = {
    is?: vocab_tableWhereInput
    isNot?: vocab_tableWhereInput
  }

  export type vocab_anto_tableOrderByRelevanceInput = {
    fields: vocab_anto_tableOrderByRelevanceFieldEnum | vocab_anto_tableOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vocab_anto_tableCountOrderByAggregateInput = {
    word_id?: SortOrder
    word_antonyms?: SortOrder
  }

  export type vocab_anto_tableAvgOrderByAggregateInput = {
    word_id?: SortOrder
  }

  export type vocab_anto_tableMaxOrderByAggregateInput = {
    word_id?: SortOrder
    word_antonyms?: SortOrder
  }

  export type vocab_anto_tableMinOrderByAggregateInput = {
    word_id?: SortOrder
    word_antonyms?: SortOrder
  }

  export type vocab_anto_tableSumOrderByAggregateInput = {
    word_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type vocab_mean_tableOrderByRelevanceInput = {
    fields: vocab_mean_tableOrderByRelevanceFieldEnum | vocab_mean_tableOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vocab_mean_tableCountOrderByAggregateInput = {
    mean_id?: SortOrder
    word_id?: SortOrder
    word_meaning?: SortOrder
    word_example?: SortOrder
    word_image?: SortOrder
  }

  export type vocab_mean_tableAvgOrderByAggregateInput = {
    mean_id?: SortOrder
    word_id?: SortOrder
  }

  export type vocab_mean_tableMaxOrderByAggregateInput = {
    mean_id?: SortOrder
    word_id?: SortOrder
    word_meaning?: SortOrder
    word_example?: SortOrder
    word_image?: SortOrder
  }

  export type vocab_mean_tableMinOrderByAggregateInput = {
    mean_id?: SortOrder
    word_id?: SortOrder
    word_meaning?: SortOrder
    word_example?: SortOrder
    word_image?: SortOrder
  }

  export type vocab_mean_tableSumOrderByAggregateInput = {
    mean_id?: SortOrder
    word_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type vocab_rela_tableOrderByRelevanceInput = {
    fields: vocab_rela_tableOrderByRelevanceFieldEnum | vocab_rela_tableOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vocab_rela_tableCountOrderByAggregateInput = {
    word_id?: SortOrder
    word_related_name?: SortOrder
  }

  export type vocab_rela_tableAvgOrderByAggregateInput = {
    word_id?: SortOrder
  }

  export type vocab_rela_tableMaxOrderByAggregateInput = {
    word_id?: SortOrder
    word_related_name?: SortOrder
  }

  export type vocab_rela_tableMinOrderByAggregateInput = {
    word_id?: SortOrder
    word_related_name?: SortOrder
  }

  export type vocab_rela_tableSumOrderByAggregateInput = {
    word_id?: SortOrder
  }

  export type vocab_syn_tableOrderByRelevanceInput = {
    fields: vocab_syn_tableOrderByRelevanceFieldEnum | vocab_syn_tableOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vocab_syn_tableCountOrderByAggregateInput = {
    word_id?: SortOrder
    word_synonyms?: SortOrder
  }

  export type vocab_syn_tableAvgOrderByAggregateInput = {
    word_id?: SortOrder
  }

  export type vocab_syn_tableMaxOrderByAggregateInput = {
    word_id?: SortOrder
    word_synonyms?: SortOrder
  }

  export type vocab_syn_tableMinOrderByAggregateInput = {
    word_id?: SortOrder
    word_synonyms?: SortOrder
  }

  export type vocab_syn_tableSumOrderByAggregateInput = {
    word_id?: SortOrder
  }

  export type Vocab_anto_tableNullableScalarRelationFilter = {
    is?: vocab_anto_tableWhereInput | null
    isNot?: vocab_anto_tableWhereInput | null
  }

  export type Vocab_mean_tableListRelationFilter = {
    every?: vocab_mean_tableWhereInput
    some?: vocab_mean_tableWhereInput
    none?: vocab_mean_tableWhereInput
  }

  export type Vocab_rela_tableNullableScalarRelationFilter = {
    is?: vocab_rela_tableWhereInput | null
    isNot?: vocab_rela_tableWhereInput | null
  }

  export type Vocab_syn_tableNullableScalarRelationFilter = {
    is?: vocab_syn_tableWhereInput | null
    isNot?: vocab_syn_tableWhereInput | null
  }

  export type vocab_mean_tableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type vocab_tableOrderByRelevanceInput = {
    fields: vocab_tableOrderByRelevanceFieldEnum | vocab_tableOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vocab_tableCountOrderByAggregateInput = {
    word_id?: SortOrder
    word_name?: SortOrder
    word_type?: SortOrder
    word_ipa?: SortOrder
    word_voice?: SortOrder
    word_topic?: SortOrder
  }

  export type vocab_tableAvgOrderByAggregateInput = {
    word_id?: SortOrder
  }

  export type vocab_tableMaxOrderByAggregateInput = {
    word_id?: SortOrder
    word_name?: SortOrder
    word_type?: SortOrder
    word_ipa?: SortOrder
    word_voice?: SortOrder
    word_topic?: SortOrder
  }

  export type vocab_tableMinOrderByAggregateInput = {
    word_id?: SortOrder
    word_name?: SortOrder
    word_type?: SortOrder
    word_ipa?: SortOrder
    word_voice?: SortOrder
    word_topic?: SortOrder
  }

  export type vocab_tableSumOrderByAggregateInput = {
    word_id?: SortOrder
  }

  export type vocab_topic_tableOrderByRelevanceInput = {
    fields: vocab_topic_tableOrderByRelevanceFieldEnum | vocab_topic_tableOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vocab_topic_tableCountOrderByAggregateInput = {
    topic_id?: SortOrder
    topic_name?: SortOrder
  }

  export type vocab_topic_tableAvgOrderByAggregateInput = {
    topic_id?: SortOrder
  }

  export type vocab_topic_tableMaxOrderByAggregateInput = {
    topic_id?: SortOrder
    topic_name?: SortOrder
  }

  export type vocab_topic_tableMinOrderByAggregateInput = {
    topic_id?: SortOrder
    topic_name?: SortOrder
  }

  export type vocab_topic_tableSumOrderByAggregateInput = {
    topic_id?: SortOrder
  }

  export type vocab_type_tableOrderByRelevanceInput = {
    fields: vocab_type_tableOrderByRelevanceFieldEnum | vocab_type_tableOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type vocab_type_tableCountOrderByAggregateInput = {
    type_id?: SortOrder
    type_symble?: SortOrder
    type_name?: SortOrder
  }

  export type vocab_type_tableAvgOrderByAggregateInput = {
    type_id?: SortOrder
  }

  export type vocab_type_tableMaxOrderByAggregateInput = {
    type_id?: SortOrder
    type_symble?: SortOrder
    type_name?: SortOrder
  }

  export type vocab_type_tableMinOrderByAggregateInput = {
    type_id?: SortOrder
    type_symble?: SortOrder
    type_name?: SortOrder
  }

  export type vocab_type_tableSumOrderByAggregateInput = {
    type_id?: SortOrder
  }

  export type vocab_tableCreateNestedOneWithoutVocab_anto_tableInput = {
    create?: XOR<vocab_tableCreateWithoutVocab_anto_tableInput, vocab_tableUncheckedCreateWithoutVocab_anto_tableInput>
    connectOrCreate?: vocab_tableCreateOrConnectWithoutVocab_anto_tableInput
    connect?: vocab_tableWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type vocab_tableUpdateOneRequiredWithoutVocab_anto_tableNestedInput = {
    create?: XOR<vocab_tableCreateWithoutVocab_anto_tableInput, vocab_tableUncheckedCreateWithoutVocab_anto_tableInput>
    connectOrCreate?: vocab_tableCreateOrConnectWithoutVocab_anto_tableInput
    upsert?: vocab_tableUpsertWithoutVocab_anto_tableInput
    connect?: vocab_tableWhereUniqueInput
    update?: XOR<XOR<vocab_tableUpdateToOneWithWhereWithoutVocab_anto_tableInput, vocab_tableUpdateWithoutVocab_anto_tableInput>, vocab_tableUncheckedUpdateWithoutVocab_anto_tableInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type vocab_tableCreateNestedOneWithoutVocab_mean_tableInput = {
    create?: XOR<vocab_tableCreateWithoutVocab_mean_tableInput, vocab_tableUncheckedCreateWithoutVocab_mean_tableInput>
    connectOrCreate?: vocab_tableCreateOrConnectWithoutVocab_mean_tableInput
    connect?: vocab_tableWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type vocab_tableUpdateOneRequiredWithoutVocab_mean_tableNestedInput = {
    create?: XOR<vocab_tableCreateWithoutVocab_mean_tableInput, vocab_tableUncheckedCreateWithoutVocab_mean_tableInput>
    connectOrCreate?: vocab_tableCreateOrConnectWithoutVocab_mean_tableInput
    upsert?: vocab_tableUpsertWithoutVocab_mean_tableInput
    connect?: vocab_tableWhereUniqueInput
    update?: XOR<XOR<vocab_tableUpdateToOneWithWhereWithoutVocab_mean_tableInput, vocab_tableUpdateWithoutVocab_mean_tableInput>, vocab_tableUncheckedUpdateWithoutVocab_mean_tableInput>
  }

  export type vocab_tableCreateNestedOneWithoutVocab_rela_tableInput = {
    create?: XOR<vocab_tableCreateWithoutVocab_rela_tableInput, vocab_tableUncheckedCreateWithoutVocab_rela_tableInput>
    connectOrCreate?: vocab_tableCreateOrConnectWithoutVocab_rela_tableInput
    connect?: vocab_tableWhereUniqueInput
  }

  export type vocab_tableUpdateOneRequiredWithoutVocab_rela_tableNestedInput = {
    create?: XOR<vocab_tableCreateWithoutVocab_rela_tableInput, vocab_tableUncheckedCreateWithoutVocab_rela_tableInput>
    connectOrCreate?: vocab_tableCreateOrConnectWithoutVocab_rela_tableInput
    upsert?: vocab_tableUpsertWithoutVocab_rela_tableInput
    connect?: vocab_tableWhereUniqueInput
    update?: XOR<XOR<vocab_tableUpdateToOneWithWhereWithoutVocab_rela_tableInput, vocab_tableUpdateWithoutVocab_rela_tableInput>, vocab_tableUncheckedUpdateWithoutVocab_rela_tableInput>
  }

  export type vocab_tableCreateNestedOneWithoutVocab_syn_tableInput = {
    create?: XOR<vocab_tableCreateWithoutVocab_syn_tableInput, vocab_tableUncheckedCreateWithoutVocab_syn_tableInput>
    connectOrCreate?: vocab_tableCreateOrConnectWithoutVocab_syn_tableInput
    connect?: vocab_tableWhereUniqueInput
  }

  export type vocab_tableUpdateOneRequiredWithoutVocab_syn_tableNestedInput = {
    create?: XOR<vocab_tableCreateWithoutVocab_syn_tableInput, vocab_tableUncheckedCreateWithoutVocab_syn_tableInput>
    connectOrCreate?: vocab_tableCreateOrConnectWithoutVocab_syn_tableInput
    upsert?: vocab_tableUpsertWithoutVocab_syn_tableInput
    connect?: vocab_tableWhereUniqueInput
    update?: XOR<XOR<vocab_tableUpdateToOneWithWhereWithoutVocab_syn_tableInput, vocab_tableUpdateWithoutVocab_syn_tableInput>, vocab_tableUncheckedUpdateWithoutVocab_syn_tableInput>
  }

  export type vocab_anto_tableCreateNestedOneWithoutVocab_tableInput = {
    create?: XOR<vocab_anto_tableCreateWithoutVocab_tableInput, vocab_anto_tableUncheckedCreateWithoutVocab_tableInput>
    connectOrCreate?: vocab_anto_tableCreateOrConnectWithoutVocab_tableInput
    connect?: vocab_anto_tableWhereUniqueInput
  }

  export type vocab_mean_tableCreateNestedManyWithoutVocab_tableInput = {
    create?: XOR<vocab_mean_tableCreateWithoutVocab_tableInput, vocab_mean_tableUncheckedCreateWithoutVocab_tableInput> | vocab_mean_tableCreateWithoutVocab_tableInput[] | vocab_mean_tableUncheckedCreateWithoutVocab_tableInput[]
    connectOrCreate?: vocab_mean_tableCreateOrConnectWithoutVocab_tableInput | vocab_mean_tableCreateOrConnectWithoutVocab_tableInput[]
    createMany?: vocab_mean_tableCreateManyVocab_tableInputEnvelope
    connect?: vocab_mean_tableWhereUniqueInput | vocab_mean_tableWhereUniqueInput[]
  }

  export type vocab_rela_tableCreateNestedOneWithoutVocab_tableInput = {
    create?: XOR<vocab_rela_tableCreateWithoutVocab_tableInput, vocab_rela_tableUncheckedCreateWithoutVocab_tableInput>
    connectOrCreate?: vocab_rela_tableCreateOrConnectWithoutVocab_tableInput
    connect?: vocab_rela_tableWhereUniqueInput
  }

  export type vocab_syn_tableCreateNestedOneWithoutVocab_tableInput = {
    create?: XOR<vocab_syn_tableCreateWithoutVocab_tableInput, vocab_syn_tableUncheckedCreateWithoutVocab_tableInput>
    connectOrCreate?: vocab_syn_tableCreateOrConnectWithoutVocab_tableInput
    connect?: vocab_syn_tableWhereUniqueInput
  }

  export type vocab_anto_tableUncheckedCreateNestedOneWithoutVocab_tableInput = {
    create?: XOR<vocab_anto_tableCreateWithoutVocab_tableInput, vocab_anto_tableUncheckedCreateWithoutVocab_tableInput>
    connectOrCreate?: vocab_anto_tableCreateOrConnectWithoutVocab_tableInput
    connect?: vocab_anto_tableWhereUniqueInput
  }

  export type vocab_mean_tableUncheckedCreateNestedManyWithoutVocab_tableInput = {
    create?: XOR<vocab_mean_tableCreateWithoutVocab_tableInput, vocab_mean_tableUncheckedCreateWithoutVocab_tableInput> | vocab_mean_tableCreateWithoutVocab_tableInput[] | vocab_mean_tableUncheckedCreateWithoutVocab_tableInput[]
    connectOrCreate?: vocab_mean_tableCreateOrConnectWithoutVocab_tableInput | vocab_mean_tableCreateOrConnectWithoutVocab_tableInput[]
    createMany?: vocab_mean_tableCreateManyVocab_tableInputEnvelope
    connect?: vocab_mean_tableWhereUniqueInput | vocab_mean_tableWhereUniqueInput[]
  }

  export type vocab_rela_tableUncheckedCreateNestedOneWithoutVocab_tableInput = {
    create?: XOR<vocab_rela_tableCreateWithoutVocab_tableInput, vocab_rela_tableUncheckedCreateWithoutVocab_tableInput>
    connectOrCreate?: vocab_rela_tableCreateOrConnectWithoutVocab_tableInput
    connect?: vocab_rela_tableWhereUniqueInput
  }

  export type vocab_syn_tableUncheckedCreateNestedOneWithoutVocab_tableInput = {
    create?: XOR<vocab_syn_tableCreateWithoutVocab_tableInput, vocab_syn_tableUncheckedCreateWithoutVocab_tableInput>
    connectOrCreate?: vocab_syn_tableCreateOrConnectWithoutVocab_tableInput
    connect?: vocab_syn_tableWhereUniqueInput
  }

  export type vocab_anto_tableUpdateOneWithoutVocab_tableNestedInput = {
    create?: XOR<vocab_anto_tableCreateWithoutVocab_tableInput, vocab_anto_tableUncheckedCreateWithoutVocab_tableInput>
    connectOrCreate?: vocab_anto_tableCreateOrConnectWithoutVocab_tableInput
    upsert?: vocab_anto_tableUpsertWithoutVocab_tableInput
    disconnect?: vocab_anto_tableWhereInput | boolean
    delete?: vocab_anto_tableWhereInput | boolean
    connect?: vocab_anto_tableWhereUniqueInput
    update?: XOR<XOR<vocab_anto_tableUpdateToOneWithWhereWithoutVocab_tableInput, vocab_anto_tableUpdateWithoutVocab_tableInput>, vocab_anto_tableUncheckedUpdateWithoutVocab_tableInput>
  }

  export type vocab_mean_tableUpdateManyWithoutVocab_tableNestedInput = {
    create?: XOR<vocab_mean_tableCreateWithoutVocab_tableInput, vocab_mean_tableUncheckedCreateWithoutVocab_tableInput> | vocab_mean_tableCreateWithoutVocab_tableInput[] | vocab_mean_tableUncheckedCreateWithoutVocab_tableInput[]
    connectOrCreate?: vocab_mean_tableCreateOrConnectWithoutVocab_tableInput | vocab_mean_tableCreateOrConnectWithoutVocab_tableInput[]
    upsert?: vocab_mean_tableUpsertWithWhereUniqueWithoutVocab_tableInput | vocab_mean_tableUpsertWithWhereUniqueWithoutVocab_tableInput[]
    createMany?: vocab_mean_tableCreateManyVocab_tableInputEnvelope
    set?: vocab_mean_tableWhereUniqueInput | vocab_mean_tableWhereUniqueInput[]
    disconnect?: vocab_mean_tableWhereUniqueInput | vocab_mean_tableWhereUniqueInput[]
    delete?: vocab_mean_tableWhereUniqueInput | vocab_mean_tableWhereUniqueInput[]
    connect?: vocab_mean_tableWhereUniqueInput | vocab_mean_tableWhereUniqueInput[]
    update?: vocab_mean_tableUpdateWithWhereUniqueWithoutVocab_tableInput | vocab_mean_tableUpdateWithWhereUniqueWithoutVocab_tableInput[]
    updateMany?: vocab_mean_tableUpdateManyWithWhereWithoutVocab_tableInput | vocab_mean_tableUpdateManyWithWhereWithoutVocab_tableInput[]
    deleteMany?: vocab_mean_tableScalarWhereInput | vocab_mean_tableScalarWhereInput[]
  }

  export type vocab_rela_tableUpdateOneWithoutVocab_tableNestedInput = {
    create?: XOR<vocab_rela_tableCreateWithoutVocab_tableInput, vocab_rela_tableUncheckedCreateWithoutVocab_tableInput>
    connectOrCreate?: vocab_rela_tableCreateOrConnectWithoutVocab_tableInput
    upsert?: vocab_rela_tableUpsertWithoutVocab_tableInput
    disconnect?: vocab_rela_tableWhereInput | boolean
    delete?: vocab_rela_tableWhereInput | boolean
    connect?: vocab_rela_tableWhereUniqueInput
    update?: XOR<XOR<vocab_rela_tableUpdateToOneWithWhereWithoutVocab_tableInput, vocab_rela_tableUpdateWithoutVocab_tableInput>, vocab_rela_tableUncheckedUpdateWithoutVocab_tableInput>
  }

  export type vocab_syn_tableUpdateOneWithoutVocab_tableNestedInput = {
    create?: XOR<vocab_syn_tableCreateWithoutVocab_tableInput, vocab_syn_tableUncheckedCreateWithoutVocab_tableInput>
    connectOrCreate?: vocab_syn_tableCreateOrConnectWithoutVocab_tableInput
    upsert?: vocab_syn_tableUpsertWithoutVocab_tableInput
    disconnect?: vocab_syn_tableWhereInput | boolean
    delete?: vocab_syn_tableWhereInput | boolean
    connect?: vocab_syn_tableWhereUniqueInput
    update?: XOR<XOR<vocab_syn_tableUpdateToOneWithWhereWithoutVocab_tableInput, vocab_syn_tableUpdateWithoutVocab_tableInput>, vocab_syn_tableUncheckedUpdateWithoutVocab_tableInput>
  }

  export type vocab_anto_tableUncheckedUpdateOneWithoutVocab_tableNestedInput = {
    create?: XOR<vocab_anto_tableCreateWithoutVocab_tableInput, vocab_anto_tableUncheckedCreateWithoutVocab_tableInput>
    connectOrCreate?: vocab_anto_tableCreateOrConnectWithoutVocab_tableInput
    upsert?: vocab_anto_tableUpsertWithoutVocab_tableInput
    disconnect?: vocab_anto_tableWhereInput | boolean
    delete?: vocab_anto_tableWhereInput | boolean
    connect?: vocab_anto_tableWhereUniqueInput
    update?: XOR<XOR<vocab_anto_tableUpdateToOneWithWhereWithoutVocab_tableInput, vocab_anto_tableUpdateWithoutVocab_tableInput>, vocab_anto_tableUncheckedUpdateWithoutVocab_tableInput>
  }

  export type vocab_mean_tableUncheckedUpdateManyWithoutVocab_tableNestedInput = {
    create?: XOR<vocab_mean_tableCreateWithoutVocab_tableInput, vocab_mean_tableUncheckedCreateWithoutVocab_tableInput> | vocab_mean_tableCreateWithoutVocab_tableInput[] | vocab_mean_tableUncheckedCreateWithoutVocab_tableInput[]
    connectOrCreate?: vocab_mean_tableCreateOrConnectWithoutVocab_tableInput | vocab_mean_tableCreateOrConnectWithoutVocab_tableInput[]
    upsert?: vocab_mean_tableUpsertWithWhereUniqueWithoutVocab_tableInput | vocab_mean_tableUpsertWithWhereUniqueWithoutVocab_tableInput[]
    createMany?: vocab_mean_tableCreateManyVocab_tableInputEnvelope
    set?: vocab_mean_tableWhereUniqueInput | vocab_mean_tableWhereUniqueInput[]
    disconnect?: vocab_mean_tableWhereUniqueInput | vocab_mean_tableWhereUniqueInput[]
    delete?: vocab_mean_tableWhereUniqueInput | vocab_mean_tableWhereUniqueInput[]
    connect?: vocab_mean_tableWhereUniqueInput | vocab_mean_tableWhereUniqueInput[]
    update?: vocab_mean_tableUpdateWithWhereUniqueWithoutVocab_tableInput | vocab_mean_tableUpdateWithWhereUniqueWithoutVocab_tableInput[]
    updateMany?: vocab_mean_tableUpdateManyWithWhereWithoutVocab_tableInput | vocab_mean_tableUpdateManyWithWhereWithoutVocab_tableInput[]
    deleteMany?: vocab_mean_tableScalarWhereInput | vocab_mean_tableScalarWhereInput[]
  }

  export type vocab_rela_tableUncheckedUpdateOneWithoutVocab_tableNestedInput = {
    create?: XOR<vocab_rela_tableCreateWithoutVocab_tableInput, vocab_rela_tableUncheckedCreateWithoutVocab_tableInput>
    connectOrCreate?: vocab_rela_tableCreateOrConnectWithoutVocab_tableInput
    upsert?: vocab_rela_tableUpsertWithoutVocab_tableInput
    disconnect?: vocab_rela_tableWhereInput | boolean
    delete?: vocab_rela_tableWhereInput | boolean
    connect?: vocab_rela_tableWhereUniqueInput
    update?: XOR<XOR<vocab_rela_tableUpdateToOneWithWhereWithoutVocab_tableInput, vocab_rela_tableUpdateWithoutVocab_tableInput>, vocab_rela_tableUncheckedUpdateWithoutVocab_tableInput>
  }

  export type vocab_syn_tableUncheckedUpdateOneWithoutVocab_tableNestedInput = {
    create?: XOR<vocab_syn_tableCreateWithoutVocab_tableInput, vocab_syn_tableUncheckedCreateWithoutVocab_tableInput>
    connectOrCreate?: vocab_syn_tableCreateOrConnectWithoutVocab_tableInput
    upsert?: vocab_syn_tableUpsertWithoutVocab_tableInput
    disconnect?: vocab_syn_tableWhereInput | boolean
    delete?: vocab_syn_tableWhereInput | boolean
    connect?: vocab_syn_tableWhereUniqueInput
    update?: XOR<XOR<vocab_syn_tableUpdateToOneWithWhereWithoutVocab_tableInput, vocab_syn_tableUpdateWithoutVocab_tableInput>, vocab_syn_tableUncheckedUpdateWithoutVocab_tableInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type vocab_tableCreateWithoutVocab_anto_tableInput = {
    word_name: string
    word_type: string
    word_ipa?: string | null
    word_voice?: string | null
    word_topic?: string | null
    vocab_mean_table?: vocab_mean_tableCreateNestedManyWithoutVocab_tableInput
    vocab_rela_table?: vocab_rela_tableCreateNestedOneWithoutVocab_tableInput
    vocab_syn_table?: vocab_syn_tableCreateNestedOneWithoutVocab_tableInput
  }

  export type vocab_tableUncheckedCreateWithoutVocab_anto_tableInput = {
    word_id?: number
    word_name: string
    word_type: string
    word_ipa?: string | null
    word_voice?: string | null
    word_topic?: string | null
    vocab_mean_table?: vocab_mean_tableUncheckedCreateNestedManyWithoutVocab_tableInput
    vocab_rela_table?: vocab_rela_tableUncheckedCreateNestedOneWithoutVocab_tableInput
    vocab_syn_table?: vocab_syn_tableUncheckedCreateNestedOneWithoutVocab_tableInput
  }

  export type vocab_tableCreateOrConnectWithoutVocab_anto_tableInput = {
    where: vocab_tableWhereUniqueInput
    create: XOR<vocab_tableCreateWithoutVocab_anto_tableInput, vocab_tableUncheckedCreateWithoutVocab_anto_tableInput>
  }

  export type vocab_tableUpsertWithoutVocab_anto_tableInput = {
    update: XOR<vocab_tableUpdateWithoutVocab_anto_tableInput, vocab_tableUncheckedUpdateWithoutVocab_anto_tableInput>
    create: XOR<vocab_tableCreateWithoutVocab_anto_tableInput, vocab_tableUncheckedCreateWithoutVocab_anto_tableInput>
    where?: vocab_tableWhereInput
  }

  export type vocab_tableUpdateToOneWithWhereWithoutVocab_anto_tableInput = {
    where?: vocab_tableWhereInput
    data: XOR<vocab_tableUpdateWithoutVocab_anto_tableInput, vocab_tableUncheckedUpdateWithoutVocab_anto_tableInput>
  }

  export type vocab_tableUpdateWithoutVocab_anto_tableInput = {
    word_name?: StringFieldUpdateOperationsInput | string
    word_type?: StringFieldUpdateOperationsInput | string
    word_ipa?: NullableStringFieldUpdateOperationsInput | string | null
    word_voice?: NullableStringFieldUpdateOperationsInput | string | null
    word_topic?: NullableStringFieldUpdateOperationsInput | string | null
    vocab_mean_table?: vocab_mean_tableUpdateManyWithoutVocab_tableNestedInput
    vocab_rela_table?: vocab_rela_tableUpdateOneWithoutVocab_tableNestedInput
    vocab_syn_table?: vocab_syn_tableUpdateOneWithoutVocab_tableNestedInput
  }

  export type vocab_tableUncheckedUpdateWithoutVocab_anto_tableInput = {
    word_id?: IntFieldUpdateOperationsInput | number
    word_name?: StringFieldUpdateOperationsInput | string
    word_type?: StringFieldUpdateOperationsInput | string
    word_ipa?: NullableStringFieldUpdateOperationsInput | string | null
    word_voice?: NullableStringFieldUpdateOperationsInput | string | null
    word_topic?: NullableStringFieldUpdateOperationsInput | string | null
    vocab_mean_table?: vocab_mean_tableUncheckedUpdateManyWithoutVocab_tableNestedInput
    vocab_rela_table?: vocab_rela_tableUncheckedUpdateOneWithoutVocab_tableNestedInput
    vocab_syn_table?: vocab_syn_tableUncheckedUpdateOneWithoutVocab_tableNestedInput
  }

  export type vocab_tableCreateWithoutVocab_mean_tableInput = {
    word_name: string
    word_type: string
    word_ipa?: string | null
    word_voice?: string | null
    word_topic?: string | null
    vocab_anto_table?: vocab_anto_tableCreateNestedOneWithoutVocab_tableInput
    vocab_rela_table?: vocab_rela_tableCreateNestedOneWithoutVocab_tableInput
    vocab_syn_table?: vocab_syn_tableCreateNestedOneWithoutVocab_tableInput
  }

  export type vocab_tableUncheckedCreateWithoutVocab_mean_tableInput = {
    word_id?: number
    word_name: string
    word_type: string
    word_ipa?: string | null
    word_voice?: string | null
    word_topic?: string | null
    vocab_anto_table?: vocab_anto_tableUncheckedCreateNestedOneWithoutVocab_tableInput
    vocab_rela_table?: vocab_rela_tableUncheckedCreateNestedOneWithoutVocab_tableInput
    vocab_syn_table?: vocab_syn_tableUncheckedCreateNestedOneWithoutVocab_tableInput
  }

  export type vocab_tableCreateOrConnectWithoutVocab_mean_tableInput = {
    where: vocab_tableWhereUniqueInput
    create: XOR<vocab_tableCreateWithoutVocab_mean_tableInput, vocab_tableUncheckedCreateWithoutVocab_mean_tableInput>
  }

  export type vocab_tableUpsertWithoutVocab_mean_tableInput = {
    update: XOR<vocab_tableUpdateWithoutVocab_mean_tableInput, vocab_tableUncheckedUpdateWithoutVocab_mean_tableInput>
    create: XOR<vocab_tableCreateWithoutVocab_mean_tableInput, vocab_tableUncheckedCreateWithoutVocab_mean_tableInput>
    where?: vocab_tableWhereInput
  }

  export type vocab_tableUpdateToOneWithWhereWithoutVocab_mean_tableInput = {
    where?: vocab_tableWhereInput
    data: XOR<vocab_tableUpdateWithoutVocab_mean_tableInput, vocab_tableUncheckedUpdateWithoutVocab_mean_tableInput>
  }

  export type vocab_tableUpdateWithoutVocab_mean_tableInput = {
    word_name?: StringFieldUpdateOperationsInput | string
    word_type?: StringFieldUpdateOperationsInput | string
    word_ipa?: NullableStringFieldUpdateOperationsInput | string | null
    word_voice?: NullableStringFieldUpdateOperationsInput | string | null
    word_topic?: NullableStringFieldUpdateOperationsInput | string | null
    vocab_anto_table?: vocab_anto_tableUpdateOneWithoutVocab_tableNestedInput
    vocab_rela_table?: vocab_rela_tableUpdateOneWithoutVocab_tableNestedInput
    vocab_syn_table?: vocab_syn_tableUpdateOneWithoutVocab_tableNestedInput
  }

  export type vocab_tableUncheckedUpdateWithoutVocab_mean_tableInput = {
    word_id?: IntFieldUpdateOperationsInput | number
    word_name?: StringFieldUpdateOperationsInput | string
    word_type?: StringFieldUpdateOperationsInput | string
    word_ipa?: NullableStringFieldUpdateOperationsInput | string | null
    word_voice?: NullableStringFieldUpdateOperationsInput | string | null
    word_topic?: NullableStringFieldUpdateOperationsInput | string | null
    vocab_anto_table?: vocab_anto_tableUncheckedUpdateOneWithoutVocab_tableNestedInput
    vocab_rela_table?: vocab_rela_tableUncheckedUpdateOneWithoutVocab_tableNestedInput
    vocab_syn_table?: vocab_syn_tableUncheckedUpdateOneWithoutVocab_tableNestedInput
  }

  export type vocab_tableCreateWithoutVocab_rela_tableInput = {
    word_name: string
    word_type: string
    word_ipa?: string | null
    word_voice?: string | null
    word_topic?: string | null
    vocab_anto_table?: vocab_anto_tableCreateNestedOneWithoutVocab_tableInput
    vocab_mean_table?: vocab_mean_tableCreateNestedManyWithoutVocab_tableInput
    vocab_syn_table?: vocab_syn_tableCreateNestedOneWithoutVocab_tableInput
  }

  export type vocab_tableUncheckedCreateWithoutVocab_rela_tableInput = {
    word_id?: number
    word_name: string
    word_type: string
    word_ipa?: string | null
    word_voice?: string | null
    word_topic?: string | null
    vocab_anto_table?: vocab_anto_tableUncheckedCreateNestedOneWithoutVocab_tableInput
    vocab_mean_table?: vocab_mean_tableUncheckedCreateNestedManyWithoutVocab_tableInput
    vocab_syn_table?: vocab_syn_tableUncheckedCreateNestedOneWithoutVocab_tableInput
  }

  export type vocab_tableCreateOrConnectWithoutVocab_rela_tableInput = {
    where: vocab_tableWhereUniqueInput
    create: XOR<vocab_tableCreateWithoutVocab_rela_tableInput, vocab_tableUncheckedCreateWithoutVocab_rela_tableInput>
  }

  export type vocab_tableUpsertWithoutVocab_rela_tableInput = {
    update: XOR<vocab_tableUpdateWithoutVocab_rela_tableInput, vocab_tableUncheckedUpdateWithoutVocab_rela_tableInput>
    create: XOR<vocab_tableCreateWithoutVocab_rela_tableInput, vocab_tableUncheckedCreateWithoutVocab_rela_tableInput>
    where?: vocab_tableWhereInput
  }

  export type vocab_tableUpdateToOneWithWhereWithoutVocab_rela_tableInput = {
    where?: vocab_tableWhereInput
    data: XOR<vocab_tableUpdateWithoutVocab_rela_tableInput, vocab_tableUncheckedUpdateWithoutVocab_rela_tableInput>
  }

  export type vocab_tableUpdateWithoutVocab_rela_tableInput = {
    word_name?: StringFieldUpdateOperationsInput | string
    word_type?: StringFieldUpdateOperationsInput | string
    word_ipa?: NullableStringFieldUpdateOperationsInput | string | null
    word_voice?: NullableStringFieldUpdateOperationsInput | string | null
    word_topic?: NullableStringFieldUpdateOperationsInput | string | null
    vocab_anto_table?: vocab_anto_tableUpdateOneWithoutVocab_tableNestedInput
    vocab_mean_table?: vocab_mean_tableUpdateManyWithoutVocab_tableNestedInput
    vocab_syn_table?: vocab_syn_tableUpdateOneWithoutVocab_tableNestedInput
  }

  export type vocab_tableUncheckedUpdateWithoutVocab_rela_tableInput = {
    word_id?: IntFieldUpdateOperationsInput | number
    word_name?: StringFieldUpdateOperationsInput | string
    word_type?: StringFieldUpdateOperationsInput | string
    word_ipa?: NullableStringFieldUpdateOperationsInput | string | null
    word_voice?: NullableStringFieldUpdateOperationsInput | string | null
    word_topic?: NullableStringFieldUpdateOperationsInput | string | null
    vocab_anto_table?: vocab_anto_tableUncheckedUpdateOneWithoutVocab_tableNestedInput
    vocab_mean_table?: vocab_mean_tableUncheckedUpdateManyWithoutVocab_tableNestedInput
    vocab_syn_table?: vocab_syn_tableUncheckedUpdateOneWithoutVocab_tableNestedInput
  }

  export type vocab_tableCreateWithoutVocab_syn_tableInput = {
    word_name: string
    word_type: string
    word_ipa?: string | null
    word_voice?: string | null
    word_topic?: string | null
    vocab_anto_table?: vocab_anto_tableCreateNestedOneWithoutVocab_tableInput
    vocab_mean_table?: vocab_mean_tableCreateNestedManyWithoutVocab_tableInput
    vocab_rela_table?: vocab_rela_tableCreateNestedOneWithoutVocab_tableInput
  }

  export type vocab_tableUncheckedCreateWithoutVocab_syn_tableInput = {
    word_id?: number
    word_name: string
    word_type: string
    word_ipa?: string | null
    word_voice?: string | null
    word_topic?: string | null
    vocab_anto_table?: vocab_anto_tableUncheckedCreateNestedOneWithoutVocab_tableInput
    vocab_mean_table?: vocab_mean_tableUncheckedCreateNestedManyWithoutVocab_tableInput
    vocab_rela_table?: vocab_rela_tableUncheckedCreateNestedOneWithoutVocab_tableInput
  }

  export type vocab_tableCreateOrConnectWithoutVocab_syn_tableInput = {
    where: vocab_tableWhereUniqueInput
    create: XOR<vocab_tableCreateWithoutVocab_syn_tableInput, vocab_tableUncheckedCreateWithoutVocab_syn_tableInput>
  }

  export type vocab_tableUpsertWithoutVocab_syn_tableInput = {
    update: XOR<vocab_tableUpdateWithoutVocab_syn_tableInput, vocab_tableUncheckedUpdateWithoutVocab_syn_tableInput>
    create: XOR<vocab_tableCreateWithoutVocab_syn_tableInput, vocab_tableUncheckedCreateWithoutVocab_syn_tableInput>
    where?: vocab_tableWhereInput
  }

  export type vocab_tableUpdateToOneWithWhereWithoutVocab_syn_tableInput = {
    where?: vocab_tableWhereInput
    data: XOR<vocab_tableUpdateWithoutVocab_syn_tableInput, vocab_tableUncheckedUpdateWithoutVocab_syn_tableInput>
  }

  export type vocab_tableUpdateWithoutVocab_syn_tableInput = {
    word_name?: StringFieldUpdateOperationsInput | string
    word_type?: StringFieldUpdateOperationsInput | string
    word_ipa?: NullableStringFieldUpdateOperationsInput | string | null
    word_voice?: NullableStringFieldUpdateOperationsInput | string | null
    word_topic?: NullableStringFieldUpdateOperationsInput | string | null
    vocab_anto_table?: vocab_anto_tableUpdateOneWithoutVocab_tableNestedInput
    vocab_mean_table?: vocab_mean_tableUpdateManyWithoutVocab_tableNestedInput
    vocab_rela_table?: vocab_rela_tableUpdateOneWithoutVocab_tableNestedInput
  }

  export type vocab_tableUncheckedUpdateWithoutVocab_syn_tableInput = {
    word_id?: IntFieldUpdateOperationsInput | number
    word_name?: StringFieldUpdateOperationsInput | string
    word_type?: StringFieldUpdateOperationsInput | string
    word_ipa?: NullableStringFieldUpdateOperationsInput | string | null
    word_voice?: NullableStringFieldUpdateOperationsInput | string | null
    word_topic?: NullableStringFieldUpdateOperationsInput | string | null
    vocab_anto_table?: vocab_anto_tableUncheckedUpdateOneWithoutVocab_tableNestedInput
    vocab_mean_table?: vocab_mean_tableUncheckedUpdateManyWithoutVocab_tableNestedInput
    vocab_rela_table?: vocab_rela_tableUncheckedUpdateOneWithoutVocab_tableNestedInput
  }

  export type vocab_anto_tableCreateWithoutVocab_tableInput = {
    word_antonyms: string
  }

  export type vocab_anto_tableUncheckedCreateWithoutVocab_tableInput = {
    word_antonyms: string
  }

  export type vocab_anto_tableCreateOrConnectWithoutVocab_tableInput = {
    where: vocab_anto_tableWhereUniqueInput
    create: XOR<vocab_anto_tableCreateWithoutVocab_tableInput, vocab_anto_tableUncheckedCreateWithoutVocab_tableInput>
  }

  export type vocab_mean_tableCreateWithoutVocab_tableInput = {
    word_meaning: string
    word_example?: string | null
    word_image?: string | null
  }

  export type vocab_mean_tableUncheckedCreateWithoutVocab_tableInput = {
    mean_id?: number
    word_meaning: string
    word_example?: string | null
    word_image?: string | null
  }

  export type vocab_mean_tableCreateOrConnectWithoutVocab_tableInput = {
    where: vocab_mean_tableWhereUniqueInput
    create: XOR<vocab_mean_tableCreateWithoutVocab_tableInput, vocab_mean_tableUncheckedCreateWithoutVocab_tableInput>
  }

  export type vocab_mean_tableCreateManyVocab_tableInputEnvelope = {
    data: vocab_mean_tableCreateManyVocab_tableInput | vocab_mean_tableCreateManyVocab_tableInput[]
    skipDuplicates?: boolean
  }

  export type vocab_rela_tableCreateWithoutVocab_tableInput = {
    word_related_name: string
  }

  export type vocab_rela_tableUncheckedCreateWithoutVocab_tableInput = {
    word_related_name: string
  }

  export type vocab_rela_tableCreateOrConnectWithoutVocab_tableInput = {
    where: vocab_rela_tableWhereUniqueInput
    create: XOR<vocab_rela_tableCreateWithoutVocab_tableInput, vocab_rela_tableUncheckedCreateWithoutVocab_tableInput>
  }

  export type vocab_syn_tableCreateWithoutVocab_tableInput = {
    word_synonyms: string
  }

  export type vocab_syn_tableUncheckedCreateWithoutVocab_tableInput = {
    word_synonyms: string
  }

  export type vocab_syn_tableCreateOrConnectWithoutVocab_tableInput = {
    where: vocab_syn_tableWhereUniqueInput
    create: XOR<vocab_syn_tableCreateWithoutVocab_tableInput, vocab_syn_tableUncheckedCreateWithoutVocab_tableInput>
  }

  export type vocab_anto_tableUpsertWithoutVocab_tableInput = {
    update: XOR<vocab_anto_tableUpdateWithoutVocab_tableInput, vocab_anto_tableUncheckedUpdateWithoutVocab_tableInput>
    create: XOR<vocab_anto_tableCreateWithoutVocab_tableInput, vocab_anto_tableUncheckedCreateWithoutVocab_tableInput>
    where?: vocab_anto_tableWhereInput
  }

  export type vocab_anto_tableUpdateToOneWithWhereWithoutVocab_tableInput = {
    where?: vocab_anto_tableWhereInput
    data: XOR<vocab_anto_tableUpdateWithoutVocab_tableInput, vocab_anto_tableUncheckedUpdateWithoutVocab_tableInput>
  }

  export type vocab_anto_tableUpdateWithoutVocab_tableInput = {
    word_antonyms?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_anto_tableUncheckedUpdateWithoutVocab_tableInput = {
    word_antonyms?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_mean_tableUpsertWithWhereUniqueWithoutVocab_tableInput = {
    where: vocab_mean_tableWhereUniqueInput
    update: XOR<vocab_mean_tableUpdateWithoutVocab_tableInput, vocab_mean_tableUncheckedUpdateWithoutVocab_tableInput>
    create: XOR<vocab_mean_tableCreateWithoutVocab_tableInput, vocab_mean_tableUncheckedCreateWithoutVocab_tableInput>
  }

  export type vocab_mean_tableUpdateWithWhereUniqueWithoutVocab_tableInput = {
    where: vocab_mean_tableWhereUniqueInput
    data: XOR<vocab_mean_tableUpdateWithoutVocab_tableInput, vocab_mean_tableUncheckedUpdateWithoutVocab_tableInput>
  }

  export type vocab_mean_tableUpdateManyWithWhereWithoutVocab_tableInput = {
    where: vocab_mean_tableScalarWhereInput
    data: XOR<vocab_mean_tableUpdateManyMutationInput, vocab_mean_tableUncheckedUpdateManyWithoutVocab_tableInput>
  }

  export type vocab_mean_tableScalarWhereInput = {
    AND?: vocab_mean_tableScalarWhereInput | vocab_mean_tableScalarWhereInput[]
    OR?: vocab_mean_tableScalarWhereInput[]
    NOT?: vocab_mean_tableScalarWhereInput | vocab_mean_tableScalarWhereInput[]
    mean_id?: IntFilter<"vocab_mean_table"> | number
    word_id?: IntFilter<"vocab_mean_table"> | number
    word_meaning?: StringFilter<"vocab_mean_table"> | string
    word_example?: StringNullableFilter<"vocab_mean_table"> | string | null
    word_image?: StringNullableFilter<"vocab_mean_table"> | string | null
  }

  export type vocab_rela_tableUpsertWithoutVocab_tableInput = {
    update: XOR<vocab_rela_tableUpdateWithoutVocab_tableInput, vocab_rela_tableUncheckedUpdateWithoutVocab_tableInput>
    create: XOR<vocab_rela_tableCreateWithoutVocab_tableInput, vocab_rela_tableUncheckedCreateWithoutVocab_tableInput>
    where?: vocab_rela_tableWhereInput
  }

  export type vocab_rela_tableUpdateToOneWithWhereWithoutVocab_tableInput = {
    where?: vocab_rela_tableWhereInput
    data: XOR<vocab_rela_tableUpdateWithoutVocab_tableInput, vocab_rela_tableUncheckedUpdateWithoutVocab_tableInput>
  }

  export type vocab_rela_tableUpdateWithoutVocab_tableInput = {
    word_related_name?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_rela_tableUncheckedUpdateWithoutVocab_tableInput = {
    word_related_name?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_syn_tableUpsertWithoutVocab_tableInput = {
    update: XOR<vocab_syn_tableUpdateWithoutVocab_tableInput, vocab_syn_tableUncheckedUpdateWithoutVocab_tableInput>
    create: XOR<vocab_syn_tableCreateWithoutVocab_tableInput, vocab_syn_tableUncheckedCreateWithoutVocab_tableInput>
    where?: vocab_syn_tableWhereInput
  }

  export type vocab_syn_tableUpdateToOneWithWhereWithoutVocab_tableInput = {
    where?: vocab_syn_tableWhereInput
    data: XOR<vocab_syn_tableUpdateWithoutVocab_tableInput, vocab_syn_tableUncheckedUpdateWithoutVocab_tableInput>
  }

  export type vocab_syn_tableUpdateWithoutVocab_tableInput = {
    word_synonyms?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_syn_tableUncheckedUpdateWithoutVocab_tableInput = {
    word_synonyms?: StringFieldUpdateOperationsInput | string
  }

  export type vocab_mean_tableCreateManyVocab_tableInput = {
    mean_id?: number
    word_meaning: string
    word_example?: string | null
    word_image?: string | null
  }

  export type vocab_mean_tableUpdateWithoutVocab_tableInput = {
    word_meaning?: StringFieldUpdateOperationsInput | string
    word_example?: NullableStringFieldUpdateOperationsInput | string | null
    word_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vocab_mean_tableUncheckedUpdateWithoutVocab_tableInput = {
    mean_id?: IntFieldUpdateOperationsInput | number
    word_meaning?: StringFieldUpdateOperationsInput | string
    word_example?: NullableStringFieldUpdateOperationsInput | string | null
    word_image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type vocab_mean_tableUncheckedUpdateManyWithoutVocab_tableInput = {
    mean_id?: IntFieldUpdateOperationsInput | number
    word_meaning?: StringFieldUpdateOperationsInput | string
    word_example?: NullableStringFieldUpdateOperationsInput | string | null
    word_image?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}