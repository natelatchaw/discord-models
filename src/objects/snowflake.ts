/**
 * @interface Snowflake
 * @see _
 */
export class Snowflake extends String {
  /**
   * @static
   * @param { bigint } binary
   * @param { bigint } bitmask
   * @param { bigint } bitshift
   * @param { bigint } addend
   * @return { bigint }
   */
  private static getBitfield(
      binary: bigint,
      bitmask: bigint,
      bitshift: bigint,
      addend: bigint,
  ): bigint {
    return ((binary & bitmask) >> bitshift) + addend;
  }

  /**
   * @static
   * @param { Snowflake } snowflake
   * @return { Date }
   */
  public static getTimestamp(snowflake: Snowflake): Date {
    const source: string = '0b' + (snowflake as string);

    const binary: bigint = BigInt(source);
    const bitmask: bigint = BigInt('0xFFFFFFFFFFC00000');
    const bitshift: bigint = BigInt(22);
    const epoch: bigint = BigInt(1420070400000);

    const bitfield: bigint = this.getBitfield(binary, bitmask, bitshift, epoch);
    const timestamp: number = Number(bitfield);
    return new Date(timestamp);
  }

  /**
   * @static
   * @param { Snowflake } snowflake
   * @return { number }
   */
  public static getWorker(snowflake: Snowflake): number {
    const source: string = '0b' + (snowflake as string);

    const binary: bigint = BigInt(source);
    const bitmask: bigint = BigInt('0x3E0000');
    const bitshift: bigint = BigInt(17);
    const addend: bigint = BigInt(0);

    return Number(this.getBitfield(binary, bitmask, bitshift, addend));
  }

  /**
   * @static
   * @param { Snowflake } snowflake
   * @return { number }
   */
  public static getProcess(snowflake: Snowflake): number {
    const source: string = '0b' + (snowflake as string);

    const binary: bigint = BigInt(source);
    const bitmask: bigint = BigInt('0x1F000');
    const bitshift: bigint = BigInt(12);
    const addend: bigint = BigInt(0);

    return Number(this.getBitfield(binary, bitmask, bitshift, addend));
  }

  /**
   * @static
   * @param { Snowflake } snowflake
   * @return { number }
   */
  public static getIncrement(snowflake: Snowflake): number {
    const source: string = '0b' + (snowflake as string);

    const binary: bigint = BigInt(source);
    const bitmask: bigint = BigInt('0xFFF');
    const bitshift: bigint = BigInt(0);
    const addend: bigint = BigInt(0);

    return Number(this.getBitfield(binary, bitmask, bitshift, addend));
  }
}
