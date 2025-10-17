
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
 * Model UniversityApplication
 * 
 */
export type UniversityApplication = $Result.DefaultSelection<Prisma.$UniversityApplicationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  Male: 'Male',
  Female: 'Female',
  Other: 'Other'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const sStatus: {
  Single: 'Single',
  Married: 'Married',
  Divorced: 'Divorced'
};

export type sStatus = (typeof sStatus)[keyof typeof sStatus]


export const Relationship: {
  Father: 'Father',
  Mother: 'Mother',
  Uncle: 'Uncle',
  Aunt: 'Aunt',
  Sibling: 'Sibling',
  Other: 'Other'
};

export type Relationship = (typeof Relationship)[keyof typeof Relationship]


export const ApplicationStatus: {
  PENDING: 'PENDING',
  UNDER_REVIEW: 'UNDER_REVIEW',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  WITHDRAWN: 'WITHDRAWN'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type sStatus = $Enums.sStatus

export const sStatus: typeof $Enums.sStatus

export type Relationship = $Enums.Relationship

export const Relationship: typeof $Enums.Relationship

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more UniversityApplications
 * const universityApplications = await prisma.universityApplication.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more UniversityApplications
   * const universityApplications = await prisma.universityApplication.findMany()
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
   * `prisma.universityApplication`: Exposes CRUD operations for the **UniversityApplication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UniversityApplications
    * const universityApplications = await prisma.universityApplication.findMany()
    * ```
    */
  get universityApplication(): Prisma.UniversityApplicationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    UniversityApplication: 'UniversityApplication'
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
      modelProps: "universityApplication"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      UniversityApplication: {
        payload: Prisma.$UniversityApplicationPayload<ExtArgs>
        fields: Prisma.UniversityApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UniversityApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UniversityApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityApplicationPayload>
          }
          findFirst: {
            args: Prisma.UniversityApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UniversityApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityApplicationPayload>
          }
          findMany: {
            args: Prisma.UniversityApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityApplicationPayload>[]
          }
          create: {
            args: Prisma.UniversityApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityApplicationPayload>
          }
          createMany: {
            args: Prisma.UniversityApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UniversityApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityApplicationPayload>
          }
          update: {
            args: Prisma.UniversityApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityApplicationPayload>
          }
          deleteMany: {
            args: Prisma.UniversityApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UniversityApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UniversityApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UniversityApplicationPayload>
          }
          aggregate: {
            args: Prisma.UniversityApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUniversityApplication>
          }
          groupBy: {
            args: Prisma.UniversityApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<UniversityApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.UniversityApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<UniversityApplicationCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    universityApplication?: UniversityApplicationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model UniversityApplication
   */

  export type AggregateUniversityApplication = {
    _count: UniversityApplicationCountAggregateOutputType | null
    _avg: UniversityApplicationAvgAggregateOutputType | null
    _sum: UniversityApplicationSumAggregateOutputType | null
    _min: UniversityApplicationMinAggregateOutputType | null
    _max: UniversityApplicationMaxAggregateOutputType | null
  }

  export type UniversityApplicationAvgAggregateOutputType = {
    id: number | null
    nID: number | null
    graduationYear: number | null
    aggregateScore: Decimal | null
    guardianPhone: number | null
  }

  export type UniversityApplicationSumAggregateOutputType = {
    id: number | null
    nID: number | null
    graduationYear: number | null
    aggregateScore: Decimal | null
    guardianPhone: number | null
  }

  export type UniversityApplicationMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    singleStatus: $Enums.sStatus | null
    nationality: string | null
    nID: number | null
    province: string | null
    district: string | null
    sector: string | null
    cell: string | null
    village: string | null
    highSchool: string | null
    graduationYear: number | null
    combination: string | null
    aggregateScore: Decimal | null
    desiredUniveristy: string | null
    father: string | null
    mother: string | null
    guardianPhone: number | null
    relation: $Enums.Relationship | null
    disability: boolean | null
    specifyDisability: string | null
    status: $Enums.ApplicationStatus | null
    createdAt: Date | null
  }

  export type UniversityApplicationMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    dateOfBirth: Date | null
    gender: $Enums.Gender | null
    singleStatus: $Enums.sStatus | null
    nationality: string | null
    nID: number | null
    province: string | null
    district: string | null
    sector: string | null
    cell: string | null
    village: string | null
    highSchool: string | null
    graduationYear: number | null
    combination: string | null
    aggregateScore: Decimal | null
    desiredUniveristy: string | null
    father: string | null
    mother: string | null
    guardianPhone: number | null
    relation: $Enums.Relationship | null
    disability: boolean | null
    specifyDisability: string | null
    status: $Enums.ApplicationStatus | null
    createdAt: Date | null
  }

  export type UniversityApplicationCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    dateOfBirth: number
    gender: number
    singleStatus: number
    nationality: number
    nID: number
    province: number
    district: number
    sector: number
    cell: number
    village: number
    highSchool: number
    graduationYear: number
    combination: number
    aggregateScore: number
    desiredUniveristy: number
    father: number
    mother: number
    guardianPhone: number
    relation: number
    disability: number
    specifyDisability: number
    status: number
    createdAt: number
    _all: number
  }


  export type UniversityApplicationAvgAggregateInputType = {
    id?: true
    nID?: true
    graduationYear?: true
    aggregateScore?: true
    guardianPhone?: true
  }

  export type UniversityApplicationSumAggregateInputType = {
    id?: true
    nID?: true
    graduationYear?: true
    aggregateScore?: true
    guardianPhone?: true
  }

  export type UniversityApplicationMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    singleStatus?: true
    nationality?: true
    nID?: true
    province?: true
    district?: true
    sector?: true
    cell?: true
    village?: true
    highSchool?: true
    graduationYear?: true
    combination?: true
    aggregateScore?: true
    desiredUniveristy?: true
    father?: true
    mother?: true
    guardianPhone?: true
    relation?: true
    disability?: true
    specifyDisability?: true
    status?: true
    createdAt?: true
  }

  export type UniversityApplicationMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    singleStatus?: true
    nationality?: true
    nID?: true
    province?: true
    district?: true
    sector?: true
    cell?: true
    village?: true
    highSchool?: true
    graduationYear?: true
    combination?: true
    aggregateScore?: true
    desiredUniveristy?: true
    father?: true
    mother?: true
    guardianPhone?: true
    relation?: true
    disability?: true
    specifyDisability?: true
    status?: true
    createdAt?: true
  }

  export type UniversityApplicationCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    dateOfBirth?: true
    gender?: true
    singleStatus?: true
    nationality?: true
    nID?: true
    province?: true
    district?: true
    sector?: true
    cell?: true
    village?: true
    highSchool?: true
    graduationYear?: true
    combination?: true
    aggregateScore?: true
    desiredUniveristy?: true
    father?: true
    mother?: true
    guardianPhone?: true
    relation?: true
    disability?: true
    specifyDisability?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type UniversityApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UniversityApplication to aggregate.
     */
    where?: UniversityApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniversityApplications to fetch.
     */
    orderBy?: UniversityApplicationOrderByWithRelationInput | UniversityApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UniversityApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniversityApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniversityApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UniversityApplications
    **/
    _count?: true | UniversityApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UniversityApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UniversityApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UniversityApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UniversityApplicationMaxAggregateInputType
  }

  export type GetUniversityApplicationAggregateType<T extends UniversityApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateUniversityApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUniversityApplication[P]>
      : GetScalarType<T[P], AggregateUniversityApplication[P]>
  }




  export type UniversityApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UniversityApplicationWhereInput
    orderBy?: UniversityApplicationOrderByWithAggregationInput | UniversityApplicationOrderByWithAggregationInput[]
    by: UniversityApplicationScalarFieldEnum[] | UniversityApplicationScalarFieldEnum
    having?: UniversityApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UniversityApplicationCountAggregateInputType | true
    _avg?: UniversityApplicationAvgAggregateInputType
    _sum?: UniversityApplicationSumAggregateInputType
    _min?: UniversityApplicationMinAggregateInputType
    _max?: UniversityApplicationMaxAggregateInputType
  }

  export type UniversityApplicationGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: Date
    gender: $Enums.Gender
    singleStatus: $Enums.sStatus
    nationality: string
    nID: number
    province: string
    district: string
    sector: string
    cell: string
    village: string
    highSchool: string
    graduationYear: number
    combination: string
    aggregateScore: Decimal
    desiredUniveristy: string
    father: string
    mother: string
    guardianPhone: number
    relation: $Enums.Relationship
    disability: boolean
    specifyDisability: string | null
    status: $Enums.ApplicationStatus
    createdAt: Date
    _count: UniversityApplicationCountAggregateOutputType | null
    _avg: UniversityApplicationAvgAggregateOutputType | null
    _sum: UniversityApplicationSumAggregateOutputType | null
    _min: UniversityApplicationMinAggregateOutputType | null
    _max: UniversityApplicationMaxAggregateOutputType | null
  }

  type GetUniversityApplicationGroupByPayload<T extends UniversityApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UniversityApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UniversityApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UniversityApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], UniversityApplicationGroupByOutputType[P]>
        }
      >
    >


  export type UniversityApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    singleStatus?: boolean
    nationality?: boolean
    nID?: boolean
    province?: boolean
    district?: boolean
    sector?: boolean
    cell?: boolean
    village?: boolean
    highSchool?: boolean
    graduationYear?: boolean
    combination?: boolean
    aggregateScore?: boolean
    desiredUniveristy?: boolean
    father?: boolean
    mother?: boolean
    guardianPhone?: boolean
    relation?: boolean
    disability?: boolean
    specifyDisability?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["universityApplication"]>



  export type UniversityApplicationSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    dateOfBirth?: boolean
    gender?: boolean
    singleStatus?: boolean
    nationality?: boolean
    nID?: boolean
    province?: boolean
    district?: boolean
    sector?: boolean
    cell?: boolean
    village?: boolean
    highSchool?: boolean
    graduationYear?: boolean
    combination?: boolean
    aggregateScore?: boolean
    desiredUniveristy?: boolean
    father?: boolean
    mother?: boolean
    guardianPhone?: boolean
    relation?: boolean
    disability?: boolean
    specifyDisability?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type UniversityApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "dateOfBirth" | "gender" | "singleStatus" | "nationality" | "nID" | "province" | "district" | "sector" | "cell" | "village" | "highSchool" | "graduationYear" | "combination" | "aggregateScore" | "desiredUniveristy" | "father" | "mother" | "guardianPhone" | "relation" | "disability" | "specifyDisability" | "status" | "createdAt", ExtArgs["result"]["universityApplication"]>

  export type $UniversityApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UniversityApplication"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      phone: string
      dateOfBirth: Date
      gender: $Enums.Gender
      singleStatus: $Enums.sStatus
      nationality: string
      nID: number
      province: string
      district: string
      sector: string
      cell: string
      village: string
      highSchool: string
      graduationYear: number
      combination: string
      aggregateScore: Prisma.Decimal
      desiredUniveristy: string
      father: string
      mother: string
      guardianPhone: number
      relation: $Enums.Relationship
      disability: boolean
      specifyDisability: string | null
      status: $Enums.ApplicationStatus
      createdAt: Date
    }, ExtArgs["result"]["universityApplication"]>
    composites: {}
  }

  type UniversityApplicationGetPayload<S extends boolean | null | undefined | UniversityApplicationDefaultArgs> = $Result.GetResult<Prisma.$UniversityApplicationPayload, S>

  type UniversityApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UniversityApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UniversityApplicationCountAggregateInputType | true
    }

  export interface UniversityApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UniversityApplication'], meta: { name: 'UniversityApplication' } }
    /**
     * Find zero or one UniversityApplication that matches the filter.
     * @param {UniversityApplicationFindUniqueArgs} args - Arguments to find a UniversityApplication
     * @example
     * // Get one UniversityApplication
     * const universityApplication = await prisma.universityApplication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UniversityApplicationFindUniqueArgs>(args: SelectSubset<T, UniversityApplicationFindUniqueArgs<ExtArgs>>): Prisma__UniversityApplicationClient<$Result.GetResult<Prisma.$UniversityApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UniversityApplication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UniversityApplicationFindUniqueOrThrowArgs} args - Arguments to find a UniversityApplication
     * @example
     * // Get one UniversityApplication
     * const universityApplication = await prisma.universityApplication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UniversityApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, UniversityApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UniversityApplicationClient<$Result.GetResult<Prisma.$UniversityApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UniversityApplication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityApplicationFindFirstArgs} args - Arguments to find a UniversityApplication
     * @example
     * // Get one UniversityApplication
     * const universityApplication = await prisma.universityApplication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UniversityApplicationFindFirstArgs>(args?: SelectSubset<T, UniversityApplicationFindFirstArgs<ExtArgs>>): Prisma__UniversityApplicationClient<$Result.GetResult<Prisma.$UniversityApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UniversityApplication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityApplicationFindFirstOrThrowArgs} args - Arguments to find a UniversityApplication
     * @example
     * // Get one UniversityApplication
     * const universityApplication = await prisma.universityApplication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UniversityApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, UniversityApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__UniversityApplicationClient<$Result.GetResult<Prisma.$UniversityApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UniversityApplications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UniversityApplications
     * const universityApplications = await prisma.universityApplication.findMany()
     * 
     * // Get first 10 UniversityApplications
     * const universityApplications = await prisma.universityApplication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const universityApplicationWithIdOnly = await prisma.universityApplication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UniversityApplicationFindManyArgs>(args?: SelectSubset<T, UniversityApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UniversityApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UniversityApplication.
     * @param {UniversityApplicationCreateArgs} args - Arguments to create a UniversityApplication.
     * @example
     * // Create one UniversityApplication
     * const UniversityApplication = await prisma.universityApplication.create({
     *   data: {
     *     // ... data to create a UniversityApplication
     *   }
     * })
     * 
     */
    create<T extends UniversityApplicationCreateArgs>(args: SelectSubset<T, UniversityApplicationCreateArgs<ExtArgs>>): Prisma__UniversityApplicationClient<$Result.GetResult<Prisma.$UniversityApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UniversityApplications.
     * @param {UniversityApplicationCreateManyArgs} args - Arguments to create many UniversityApplications.
     * @example
     * // Create many UniversityApplications
     * const universityApplication = await prisma.universityApplication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UniversityApplicationCreateManyArgs>(args?: SelectSubset<T, UniversityApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UniversityApplication.
     * @param {UniversityApplicationDeleteArgs} args - Arguments to delete one UniversityApplication.
     * @example
     * // Delete one UniversityApplication
     * const UniversityApplication = await prisma.universityApplication.delete({
     *   where: {
     *     // ... filter to delete one UniversityApplication
     *   }
     * })
     * 
     */
    delete<T extends UniversityApplicationDeleteArgs>(args: SelectSubset<T, UniversityApplicationDeleteArgs<ExtArgs>>): Prisma__UniversityApplicationClient<$Result.GetResult<Prisma.$UniversityApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UniversityApplication.
     * @param {UniversityApplicationUpdateArgs} args - Arguments to update one UniversityApplication.
     * @example
     * // Update one UniversityApplication
     * const universityApplication = await prisma.universityApplication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UniversityApplicationUpdateArgs>(args: SelectSubset<T, UniversityApplicationUpdateArgs<ExtArgs>>): Prisma__UniversityApplicationClient<$Result.GetResult<Prisma.$UniversityApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UniversityApplications.
     * @param {UniversityApplicationDeleteManyArgs} args - Arguments to filter UniversityApplications to delete.
     * @example
     * // Delete a few UniversityApplications
     * const { count } = await prisma.universityApplication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UniversityApplicationDeleteManyArgs>(args?: SelectSubset<T, UniversityApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UniversityApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UniversityApplications
     * const universityApplication = await prisma.universityApplication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UniversityApplicationUpdateManyArgs>(args: SelectSubset<T, UniversityApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UniversityApplication.
     * @param {UniversityApplicationUpsertArgs} args - Arguments to update or create a UniversityApplication.
     * @example
     * // Update or create a UniversityApplication
     * const universityApplication = await prisma.universityApplication.upsert({
     *   create: {
     *     // ... data to create a UniversityApplication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UniversityApplication we want to update
     *   }
     * })
     */
    upsert<T extends UniversityApplicationUpsertArgs>(args: SelectSubset<T, UniversityApplicationUpsertArgs<ExtArgs>>): Prisma__UniversityApplicationClient<$Result.GetResult<Prisma.$UniversityApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UniversityApplications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityApplicationCountArgs} args - Arguments to filter UniversityApplications to count.
     * @example
     * // Count the number of UniversityApplications
     * const count = await prisma.universityApplication.count({
     *   where: {
     *     // ... the filter for the UniversityApplications we want to count
     *   }
     * })
    **/
    count<T extends UniversityApplicationCountArgs>(
      args?: Subset<T, UniversityApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UniversityApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UniversityApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UniversityApplicationAggregateArgs>(args: Subset<T, UniversityApplicationAggregateArgs>): Prisma.PrismaPromise<GetUniversityApplicationAggregateType<T>>

    /**
     * Group by UniversityApplication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UniversityApplicationGroupByArgs} args - Group by arguments.
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
      T extends UniversityApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UniversityApplicationGroupByArgs['orderBy'] }
        : { orderBy?: UniversityApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UniversityApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUniversityApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UniversityApplication model
   */
  readonly fields: UniversityApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UniversityApplication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UniversityApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UniversityApplication model
   */
  interface UniversityApplicationFieldRefs {
    readonly id: FieldRef<"UniversityApplication", 'Int'>
    readonly firstName: FieldRef<"UniversityApplication", 'String'>
    readonly lastName: FieldRef<"UniversityApplication", 'String'>
    readonly email: FieldRef<"UniversityApplication", 'String'>
    readonly phone: FieldRef<"UniversityApplication", 'String'>
    readonly dateOfBirth: FieldRef<"UniversityApplication", 'DateTime'>
    readonly gender: FieldRef<"UniversityApplication", 'Gender'>
    readonly singleStatus: FieldRef<"UniversityApplication", 'sStatus'>
    readonly nationality: FieldRef<"UniversityApplication", 'String'>
    readonly nID: FieldRef<"UniversityApplication", 'Int'>
    readonly province: FieldRef<"UniversityApplication", 'String'>
    readonly district: FieldRef<"UniversityApplication", 'String'>
    readonly sector: FieldRef<"UniversityApplication", 'String'>
    readonly cell: FieldRef<"UniversityApplication", 'String'>
    readonly village: FieldRef<"UniversityApplication", 'String'>
    readonly highSchool: FieldRef<"UniversityApplication", 'String'>
    readonly graduationYear: FieldRef<"UniversityApplication", 'Int'>
    readonly combination: FieldRef<"UniversityApplication", 'String'>
    readonly aggregateScore: FieldRef<"UniversityApplication", 'Decimal'>
    readonly desiredUniveristy: FieldRef<"UniversityApplication", 'String'>
    readonly father: FieldRef<"UniversityApplication", 'String'>
    readonly mother: FieldRef<"UniversityApplication", 'String'>
    readonly guardianPhone: FieldRef<"UniversityApplication", 'Int'>
    readonly relation: FieldRef<"UniversityApplication", 'Relationship'>
    readonly disability: FieldRef<"UniversityApplication", 'Boolean'>
    readonly specifyDisability: FieldRef<"UniversityApplication", 'String'>
    readonly status: FieldRef<"UniversityApplication", 'ApplicationStatus'>
    readonly createdAt: FieldRef<"UniversityApplication", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UniversityApplication findUnique
   */
  export type UniversityApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityApplication
     */
    select?: UniversityApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityApplication
     */
    omit?: UniversityApplicationOmit<ExtArgs> | null
    /**
     * Filter, which UniversityApplication to fetch.
     */
    where: UniversityApplicationWhereUniqueInput
  }

  /**
   * UniversityApplication findUniqueOrThrow
   */
  export type UniversityApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityApplication
     */
    select?: UniversityApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityApplication
     */
    omit?: UniversityApplicationOmit<ExtArgs> | null
    /**
     * Filter, which UniversityApplication to fetch.
     */
    where: UniversityApplicationWhereUniqueInput
  }

  /**
   * UniversityApplication findFirst
   */
  export type UniversityApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityApplication
     */
    select?: UniversityApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityApplication
     */
    omit?: UniversityApplicationOmit<ExtArgs> | null
    /**
     * Filter, which UniversityApplication to fetch.
     */
    where?: UniversityApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniversityApplications to fetch.
     */
    orderBy?: UniversityApplicationOrderByWithRelationInput | UniversityApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UniversityApplications.
     */
    cursor?: UniversityApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniversityApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniversityApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UniversityApplications.
     */
    distinct?: UniversityApplicationScalarFieldEnum | UniversityApplicationScalarFieldEnum[]
  }

  /**
   * UniversityApplication findFirstOrThrow
   */
  export type UniversityApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityApplication
     */
    select?: UniversityApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityApplication
     */
    omit?: UniversityApplicationOmit<ExtArgs> | null
    /**
     * Filter, which UniversityApplication to fetch.
     */
    where?: UniversityApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniversityApplications to fetch.
     */
    orderBy?: UniversityApplicationOrderByWithRelationInput | UniversityApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UniversityApplications.
     */
    cursor?: UniversityApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniversityApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniversityApplications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UniversityApplications.
     */
    distinct?: UniversityApplicationScalarFieldEnum | UniversityApplicationScalarFieldEnum[]
  }

  /**
   * UniversityApplication findMany
   */
  export type UniversityApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityApplication
     */
    select?: UniversityApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityApplication
     */
    omit?: UniversityApplicationOmit<ExtArgs> | null
    /**
     * Filter, which UniversityApplications to fetch.
     */
    where?: UniversityApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UniversityApplications to fetch.
     */
    orderBy?: UniversityApplicationOrderByWithRelationInput | UniversityApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UniversityApplications.
     */
    cursor?: UniversityApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UniversityApplications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UniversityApplications.
     */
    skip?: number
    distinct?: UniversityApplicationScalarFieldEnum | UniversityApplicationScalarFieldEnum[]
  }

  /**
   * UniversityApplication create
   */
  export type UniversityApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityApplication
     */
    select?: UniversityApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityApplication
     */
    omit?: UniversityApplicationOmit<ExtArgs> | null
    /**
     * The data needed to create a UniversityApplication.
     */
    data: XOR<UniversityApplicationCreateInput, UniversityApplicationUncheckedCreateInput>
  }

  /**
   * UniversityApplication createMany
   */
  export type UniversityApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UniversityApplications.
     */
    data: UniversityApplicationCreateManyInput | UniversityApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UniversityApplication update
   */
  export type UniversityApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityApplication
     */
    select?: UniversityApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityApplication
     */
    omit?: UniversityApplicationOmit<ExtArgs> | null
    /**
     * The data needed to update a UniversityApplication.
     */
    data: XOR<UniversityApplicationUpdateInput, UniversityApplicationUncheckedUpdateInput>
    /**
     * Choose, which UniversityApplication to update.
     */
    where: UniversityApplicationWhereUniqueInput
  }

  /**
   * UniversityApplication updateMany
   */
  export type UniversityApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UniversityApplications.
     */
    data: XOR<UniversityApplicationUpdateManyMutationInput, UniversityApplicationUncheckedUpdateManyInput>
    /**
     * Filter which UniversityApplications to update
     */
    where?: UniversityApplicationWhereInput
    /**
     * Limit how many UniversityApplications to update.
     */
    limit?: number
  }

  /**
   * UniversityApplication upsert
   */
  export type UniversityApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityApplication
     */
    select?: UniversityApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityApplication
     */
    omit?: UniversityApplicationOmit<ExtArgs> | null
    /**
     * The filter to search for the UniversityApplication to update in case it exists.
     */
    where: UniversityApplicationWhereUniqueInput
    /**
     * In case the UniversityApplication found by the `where` argument doesn't exist, create a new UniversityApplication with this data.
     */
    create: XOR<UniversityApplicationCreateInput, UniversityApplicationUncheckedCreateInput>
    /**
     * In case the UniversityApplication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UniversityApplicationUpdateInput, UniversityApplicationUncheckedUpdateInput>
  }

  /**
   * UniversityApplication delete
   */
  export type UniversityApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityApplication
     */
    select?: UniversityApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityApplication
     */
    omit?: UniversityApplicationOmit<ExtArgs> | null
    /**
     * Filter which UniversityApplication to delete.
     */
    where: UniversityApplicationWhereUniqueInput
  }

  /**
   * UniversityApplication deleteMany
   */
  export type UniversityApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UniversityApplications to delete
     */
    where?: UniversityApplicationWhereInput
    /**
     * Limit how many UniversityApplications to delete.
     */
    limit?: number
  }

  /**
   * UniversityApplication without action
   */
  export type UniversityApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UniversityApplication
     */
    select?: UniversityApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UniversityApplication
     */
    omit?: UniversityApplicationOmit<ExtArgs> | null
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


  export const UniversityApplicationScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    singleStatus: 'singleStatus',
    nationality: 'nationality',
    nID: 'nID',
    province: 'province',
    district: 'district',
    sector: 'sector',
    cell: 'cell',
    village: 'village',
    highSchool: 'highSchool',
    graduationYear: 'graduationYear',
    combination: 'combination',
    aggregateScore: 'aggregateScore',
    desiredUniveristy: 'desiredUniveristy',
    father: 'father',
    mother: 'mother',
    guardianPhone: 'guardianPhone',
    relation: 'relation',
    disability: 'disability',
    specifyDisability: 'specifyDisability',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type UniversityApplicationScalarFieldEnum = (typeof UniversityApplicationScalarFieldEnum)[keyof typeof UniversityApplicationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UniversityApplicationOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    nationality: 'nationality',
    province: 'province',
    district: 'district',
    sector: 'sector',
    cell: 'cell',
    village: 'village',
    highSchool: 'highSchool',
    combination: 'combination',
    desiredUniveristy: 'desiredUniveristy',
    father: 'father',
    mother: 'mother',
    specifyDisability: 'specifyDisability'
  };

  export type UniversityApplicationOrderByRelevanceFieldEnum = (typeof UniversityApplicationOrderByRelevanceFieldEnum)[keyof typeof UniversityApplicationOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'sStatus'
   */
  export type EnumsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'sStatus'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Relationship'
   */
  export type EnumRelationshipFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Relationship'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UniversityApplicationWhereInput = {
    AND?: UniversityApplicationWhereInput | UniversityApplicationWhereInput[]
    OR?: UniversityApplicationWhereInput[]
    NOT?: UniversityApplicationWhereInput | UniversityApplicationWhereInput[]
    id?: IntFilter<"UniversityApplication"> | number
    firstName?: StringFilter<"UniversityApplication"> | string
    lastName?: StringFilter<"UniversityApplication"> | string
    email?: StringFilter<"UniversityApplication"> | string
    phone?: StringFilter<"UniversityApplication"> | string
    dateOfBirth?: DateTimeFilter<"UniversityApplication"> | Date | string
    gender?: EnumGenderFilter<"UniversityApplication"> | $Enums.Gender
    singleStatus?: EnumsStatusFilter<"UniversityApplication"> | $Enums.sStatus
    nationality?: StringFilter<"UniversityApplication"> | string
    nID?: IntFilter<"UniversityApplication"> | number
    province?: StringFilter<"UniversityApplication"> | string
    district?: StringFilter<"UniversityApplication"> | string
    sector?: StringFilter<"UniversityApplication"> | string
    cell?: StringFilter<"UniversityApplication"> | string
    village?: StringFilter<"UniversityApplication"> | string
    highSchool?: StringFilter<"UniversityApplication"> | string
    graduationYear?: IntFilter<"UniversityApplication"> | number
    combination?: StringFilter<"UniversityApplication"> | string
    aggregateScore?: DecimalFilter<"UniversityApplication"> | Decimal | DecimalJsLike | number | string
    desiredUniveristy?: StringFilter<"UniversityApplication"> | string
    father?: StringFilter<"UniversityApplication"> | string
    mother?: StringFilter<"UniversityApplication"> | string
    guardianPhone?: IntFilter<"UniversityApplication"> | number
    relation?: EnumRelationshipFilter<"UniversityApplication"> | $Enums.Relationship
    disability?: BoolFilter<"UniversityApplication"> | boolean
    specifyDisability?: StringNullableFilter<"UniversityApplication"> | string | null
    status?: EnumApplicationStatusFilter<"UniversityApplication"> | $Enums.ApplicationStatus
    createdAt?: DateTimeFilter<"UniversityApplication"> | Date | string
  }

  export type UniversityApplicationOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    singleStatus?: SortOrder
    nationality?: SortOrder
    nID?: SortOrder
    province?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    cell?: SortOrder
    village?: SortOrder
    highSchool?: SortOrder
    graduationYear?: SortOrder
    combination?: SortOrder
    aggregateScore?: SortOrder
    desiredUniveristy?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    guardianPhone?: SortOrder
    relation?: SortOrder
    disability?: SortOrder
    specifyDisability?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _relevance?: UniversityApplicationOrderByRelevanceInput
  }

  export type UniversityApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UniversityApplicationWhereInput | UniversityApplicationWhereInput[]
    OR?: UniversityApplicationWhereInput[]
    NOT?: UniversityApplicationWhereInput | UniversityApplicationWhereInput[]
    firstName?: StringFilter<"UniversityApplication"> | string
    lastName?: StringFilter<"UniversityApplication"> | string
    email?: StringFilter<"UniversityApplication"> | string
    phone?: StringFilter<"UniversityApplication"> | string
    dateOfBirth?: DateTimeFilter<"UniversityApplication"> | Date | string
    gender?: EnumGenderFilter<"UniversityApplication"> | $Enums.Gender
    singleStatus?: EnumsStatusFilter<"UniversityApplication"> | $Enums.sStatus
    nationality?: StringFilter<"UniversityApplication"> | string
    nID?: IntFilter<"UniversityApplication"> | number
    province?: StringFilter<"UniversityApplication"> | string
    district?: StringFilter<"UniversityApplication"> | string
    sector?: StringFilter<"UniversityApplication"> | string
    cell?: StringFilter<"UniversityApplication"> | string
    village?: StringFilter<"UniversityApplication"> | string
    highSchool?: StringFilter<"UniversityApplication"> | string
    graduationYear?: IntFilter<"UniversityApplication"> | number
    combination?: StringFilter<"UniversityApplication"> | string
    aggregateScore?: DecimalFilter<"UniversityApplication"> | Decimal | DecimalJsLike | number | string
    desiredUniveristy?: StringFilter<"UniversityApplication"> | string
    father?: StringFilter<"UniversityApplication"> | string
    mother?: StringFilter<"UniversityApplication"> | string
    guardianPhone?: IntFilter<"UniversityApplication"> | number
    relation?: EnumRelationshipFilter<"UniversityApplication"> | $Enums.Relationship
    disability?: BoolFilter<"UniversityApplication"> | boolean
    specifyDisability?: StringNullableFilter<"UniversityApplication"> | string | null
    status?: EnumApplicationStatusFilter<"UniversityApplication"> | $Enums.ApplicationStatus
    createdAt?: DateTimeFilter<"UniversityApplication"> | Date | string
  }, "id">

  export type UniversityApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    singleStatus?: SortOrder
    nationality?: SortOrder
    nID?: SortOrder
    province?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    cell?: SortOrder
    village?: SortOrder
    highSchool?: SortOrder
    graduationYear?: SortOrder
    combination?: SortOrder
    aggregateScore?: SortOrder
    desiredUniveristy?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    guardianPhone?: SortOrder
    relation?: SortOrder
    disability?: SortOrder
    specifyDisability?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: UniversityApplicationCountOrderByAggregateInput
    _avg?: UniversityApplicationAvgOrderByAggregateInput
    _max?: UniversityApplicationMaxOrderByAggregateInput
    _min?: UniversityApplicationMinOrderByAggregateInput
    _sum?: UniversityApplicationSumOrderByAggregateInput
  }

  export type UniversityApplicationScalarWhereWithAggregatesInput = {
    AND?: UniversityApplicationScalarWhereWithAggregatesInput | UniversityApplicationScalarWhereWithAggregatesInput[]
    OR?: UniversityApplicationScalarWhereWithAggregatesInput[]
    NOT?: UniversityApplicationScalarWhereWithAggregatesInput | UniversityApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UniversityApplication"> | number
    firstName?: StringWithAggregatesFilter<"UniversityApplication"> | string
    lastName?: StringWithAggregatesFilter<"UniversityApplication"> | string
    email?: StringWithAggregatesFilter<"UniversityApplication"> | string
    phone?: StringWithAggregatesFilter<"UniversityApplication"> | string
    dateOfBirth?: DateTimeWithAggregatesFilter<"UniversityApplication"> | Date | string
    gender?: EnumGenderWithAggregatesFilter<"UniversityApplication"> | $Enums.Gender
    singleStatus?: EnumsStatusWithAggregatesFilter<"UniversityApplication"> | $Enums.sStatus
    nationality?: StringWithAggregatesFilter<"UniversityApplication"> | string
    nID?: IntWithAggregatesFilter<"UniversityApplication"> | number
    province?: StringWithAggregatesFilter<"UniversityApplication"> | string
    district?: StringWithAggregatesFilter<"UniversityApplication"> | string
    sector?: StringWithAggregatesFilter<"UniversityApplication"> | string
    cell?: StringWithAggregatesFilter<"UniversityApplication"> | string
    village?: StringWithAggregatesFilter<"UniversityApplication"> | string
    highSchool?: StringWithAggregatesFilter<"UniversityApplication"> | string
    graduationYear?: IntWithAggregatesFilter<"UniversityApplication"> | number
    combination?: StringWithAggregatesFilter<"UniversityApplication"> | string
    aggregateScore?: DecimalWithAggregatesFilter<"UniversityApplication"> | Decimal | DecimalJsLike | number | string
    desiredUniveristy?: StringWithAggregatesFilter<"UniversityApplication"> | string
    father?: StringWithAggregatesFilter<"UniversityApplication"> | string
    mother?: StringWithAggregatesFilter<"UniversityApplication"> | string
    guardianPhone?: IntWithAggregatesFilter<"UniversityApplication"> | number
    relation?: EnumRelationshipWithAggregatesFilter<"UniversityApplication"> | $Enums.Relationship
    disability?: BoolWithAggregatesFilter<"UniversityApplication"> | boolean
    specifyDisability?: StringNullableWithAggregatesFilter<"UniversityApplication"> | string | null
    status?: EnumApplicationStatusWithAggregatesFilter<"UniversityApplication"> | $Enums.ApplicationStatus
    createdAt?: DateTimeWithAggregatesFilter<"UniversityApplication"> | Date | string
  }

  export type UniversityApplicationCreateInput = {
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: Date | string
    gender?: $Enums.Gender
    singleStatus?: $Enums.sStatus
    nationality: string
    nID: number
    province: string
    district: string
    sector: string
    cell: string
    village: string
    highSchool: string
    graduationYear: number
    combination: string
    aggregateScore: Decimal | DecimalJsLike | number | string
    desiredUniveristy: string
    father: string
    mother: string
    guardianPhone: number
    relation?: $Enums.Relationship
    disability?: boolean
    specifyDisability?: string | null
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
  }

  export type UniversityApplicationUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: Date | string
    gender?: $Enums.Gender
    singleStatus?: $Enums.sStatus
    nationality: string
    nID: number
    province: string
    district: string
    sector: string
    cell: string
    village: string
    highSchool: string
    graduationYear: number
    combination: string
    aggregateScore: Decimal | DecimalJsLike | number | string
    desiredUniveristy: string
    father: string
    mother: string
    guardianPhone: number
    relation?: $Enums.Relationship
    disability?: boolean
    specifyDisability?: string | null
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
  }

  export type UniversityApplicationUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    singleStatus?: EnumsStatusFieldUpdateOperationsInput | $Enums.sStatus
    nationality?: StringFieldUpdateOperationsInput | string
    nID?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    highSchool?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    combination?: StringFieldUpdateOperationsInput | string
    aggregateScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desiredUniveristy?: StringFieldUpdateOperationsInput | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    guardianPhone?: IntFieldUpdateOperationsInput | number
    relation?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    disability?: BoolFieldUpdateOperationsInput | boolean
    specifyDisability?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    singleStatus?: EnumsStatusFieldUpdateOperationsInput | $Enums.sStatus
    nationality?: StringFieldUpdateOperationsInput | string
    nID?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    highSchool?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    combination?: StringFieldUpdateOperationsInput | string
    aggregateScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desiredUniveristy?: StringFieldUpdateOperationsInput | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    guardianPhone?: IntFieldUpdateOperationsInput | number
    relation?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    disability?: BoolFieldUpdateOperationsInput | boolean
    specifyDisability?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityApplicationCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone: string
    dateOfBirth: Date | string
    gender?: $Enums.Gender
    singleStatus?: $Enums.sStatus
    nationality: string
    nID: number
    province: string
    district: string
    sector: string
    cell: string
    village: string
    highSchool: string
    graduationYear: number
    combination: string
    aggregateScore: Decimal | DecimalJsLike | number | string
    desiredUniveristy: string
    father: string
    mother: string
    guardianPhone: number
    relation?: $Enums.Relationship
    disability?: boolean
    specifyDisability?: string | null
    status?: $Enums.ApplicationStatus
    createdAt?: Date | string
  }

  export type UniversityApplicationUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    singleStatus?: EnumsStatusFieldUpdateOperationsInput | $Enums.sStatus
    nationality?: StringFieldUpdateOperationsInput | string
    nID?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    highSchool?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    combination?: StringFieldUpdateOperationsInput | string
    aggregateScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desiredUniveristy?: StringFieldUpdateOperationsInput | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    guardianPhone?: IntFieldUpdateOperationsInput | number
    relation?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    disability?: BoolFieldUpdateOperationsInput | boolean
    specifyDisability?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UniversityApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    singleStatus?: EnumsStatusFieldUpdateOperationsInput | $Enums.sStatus
    nationality?: StringFieldUpdateOperationsInput | string
    nID?: IntFieldUpdateOperationsInput | number
    province?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    cell?: StringFieldUpdateOperationsInput | string
    village?: StringFieldUpdateOperationsInput | string
    highSchool?: StringFieldUpdateOperationsInput | string
    graduationYear?: IntFieldUpdateOperationsInput | number
    combination?: StringFieldUpdateOperationsInput | string
    aggregateScore?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    desiredUniveristy?: StringFieldUpdateOperationsInput | string
    father?: StringFieldUpdateOperationsInput | string
    mother?: StringFieldUpdateOperationsInput | string
    guardianPhone?: IntFieldUpdateOperationsInput | number
    relation?: EnumRelationshipFieldUpdateOperationsInput | $Enums.Relationship
    disability?: BoolFieldUpdateOperationsInput | boolean
    specifyDisability?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type EnumsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.sStatus | EnumsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.sStatus[]
    notIn?: $Enums.sStatus[]
    not?: NestedEnumsStatusFilter<$PrismaModel> | $Enums.sStatus
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumRelationshipFilter<$PrismaModel = never> = {
    equals?: $Enums.Relationship | EnumRelationshipFieldRefInput<$PrismaModel>
    in?: $Enums.Relationship[]
    notIn?: $Enums.Relationship[]
    not?: NestedEnumRelationshipFilter<$PrismaModel> | $Enums.Relationship
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UniversityApplicationOrderByRelevanceInput = {
    fields: UniversityApplicationOrderByRelevanceFieldEnum | UniversityApplicationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UniversityApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    singleStatus?: SortOrder
    nationality?: SortOrder
    nID?: SortOrder
    province?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    cell?: SortOrder
    village?: SortOrder
    highSchool?: SortOrder
    graduationYear?: SortOrder
    combination?: SortOrder
    aggregateScore?: SortOrder
    desiredUniveristy?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    guardianPhone?: SortOrder
    relation?: SortOrder
    disability?: SortOrder
    specifyDisability?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UniversityApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    nID?: SortOrder
    graduationYear?: SortOrder
    aggregateScore?: SortOrder
    guardianPhone?: SortOrder
  }

  export type UniversityApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    singleStatus?: SortOrder
    nationality?: SortOrder
    nID?: SortOrder
    province?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    cell?: SortOrder
    village?: SortOrder
    highSchool?: SortOrder
    graduationYear?: SortOrder
    combination?: SortOrder
    aggregateScore?: SortOrder
    desiredUniveristy?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    guardianPhone?: SortOrder
    relation?: SortOrder
    disability?: SortOrder
    specifyDisability?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UniversityApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dateOfBirth?: SortOrder
    gender?: SortOrder
    singleStatus?: SortOrder
    nationality?: SortOrder
    nID?: SortOrder
    province?: SortOrder
    district?: SortOrder
    sector?: SortOrder
    cell?: SortOrder
    village?: SortOrder
    highSchool?: SortOrder
    graduationYear?: SortOrder
    combination?: SortOrder
    aggregateScore?: SortOrder
    desiredUniveristy?: SortOrder
    father?: SortOrder
    mother?: SortOrder
    guardianPhone?: SortOrder
    relation?: SortOrder
    disability?: SortOrder
    specifyDisability?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type UniversityApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    nID?: SortOrder
    graduationYear?: SortOrder
    aggregateScore?: SortOrder
    guardianPhone?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type EnumsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sStatus | EnumsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.sStatus[]
    notIn?: $Enums.sStatus[]
    not?: NestedEnumsStatusWithAggregatesFilter<$PrismaModel> | $Enums.sStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsStatusFilter<$PrismaModel>
    _max?: NestedEnumsStatusFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumRelationshipWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Relationship | EnumRelationshipFieldRefInput<$PrismaModel>
    in?: $Enums.Relationship[]
    notIn?: $Enums.Relationship[]
    not?: NestedEnumRelationshipWithAggregatesFilter<$PrismaModel> | $Enums.Relationship
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipFilter<$PrismaModel>
    _max?: NestedEnumRelationshipFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type EnumsStatusFieldUpdateOperationsInput = {
    set?: $Enums.sStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumRelationshipFieldUpdateOperationsInput = {
    set?: $Enums.Relationship
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.sStatus | EnumsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.sStatus[]
    notIn?: $Enums.sStatus[]
    not?: NestedEnumsStatusFilter<$PrismaModel> | $Enums.sStatus
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumRelationshipFilter<$PrismaModel = never> = {
    equals?: $Enums.Relationship | EnumRelationshipFieldRefInput<$PrismaModel>
    in?: $Enums.Relationship[]
    notIn?: $Enums.Relationship[]
    not?: NestedEnumRelationshipFilter<$PrismaModel> | $Enums.Relationship
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[]
    notIn?: $Enums.Gender[]
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.sStatus | EnumsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.sStatus[]
    notIn?: $Enums.sStatus[]
    not?: NestedEnumsStatusWithAggregatesFilter<$PrismaModel> | $Enums.sStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsStatusFilter<$PrismaModel>
    _max?: NestedEnumsStatusFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumRelationshipWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Relationship | EnumRelationshipFieldRefInput<$PrismaModel>
    in?: $Enums.Relationship[]
    notIn?: $Enums.Relationship[]
    not?: NestedEnumRelationshipWithAggregatesFilter<$PrismaModel> | $Enums.Relationship
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRelationshipFilter<$PrismaModel>
    _max?: NestedEnumRelationshipFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[]
    notIn?: $Enums.ApplicationStatus[]
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
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