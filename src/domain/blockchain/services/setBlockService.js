export class SetBlockService {
  constructor({repository, blockRequestFactory}) {
    this._repository = repository
    this._blockRequestFactory = blockRequestFactory
  }

  execute({minedBlockValueObject}) {
    const blockData = minedBlockValueObject.toJSON()
    const block = this._repository.setBlock({
      blockData: this._blockRequestFactory({
        blockData
      })
    })

    return block
  }
}
